import {compose, lifecycle, withHandlers, withState} from 'recompose'
import CreateEmployee from './create-employee'
import {connect} from 'react-redux'
import {change, getFormValues, initialize, reduxForm} from 'redux-form'
import {hasObjectLength, hasValue} from 'utils/condition'
import {omit} from 'lodash'
import {
  addEmployee,
  deleteEmployee,
  fetchSingleEmployee,
  updateEmployee
} from 'stores/employee/actions'
import {employeeValidator as validate} from 'stores/employee/validator'
import {EMPLOYEE_FORM} from 'stores/employee/types'
import {routeParamsSelector} from 'stores/common/selector'
import {formattedDate} from 'utils'

const mapStateToProps = (state, {match}) => ({
  formValues: getFormValues(EMPLOYEE_FORM)(state) || {},
  initialValues: {role: 'employee'},
  ...routeParamsSelector(match)
})

export default compose(
  connect(mapStateToProps),
  reduxForm({form: EMPLOYEE_FORM, validate}),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('increments', 'setIncrements', []),
  withState('isSaving', 'setIsSaving', false),
  withHandlers({
    setFormData: props => data =>
      props.dispatch(initialize(EMPLOYEE_FORM, data)),
    setFormField: props => (field, value) =>
      props.dispatch(change(EMPLOYEE_FORM, field, value))
  }),
  withHandlers({
    setInitialData: props => async data => {
      const {setFormData, setIncrements} = props
      const employeeData = omit(data, ['password', 'confirm_password'])
      await setFormData({
        ...employeeData,
        joining_date: formattedDate(employeeData.joining_date)
      })
      const increments = data?.increments ?? []
      await setIncrements(increments)
    }
  }),
  withHandlers({
    onSubmit: props => async data => {
      if (!hasObjectLength(data)) return
      const {dispatch, setIsSaving, isEditScreen, increments, history} = props
      await setIsSaving(true)
      const employee_profile_image = data.employee_profile_image
      const files = hasValue(employee_profile_image) &&
        typeof employee_profile_image !== 'string' && {employee_profile_image}

      let params = omit(data, ['employee_profile_image'])
      if (!hasValue(data.password))
        params = omit(params, ['password', 'confirm_password'])
      params = {...params, increments}
      const onSuccess = () => history.goBack()
      if (isEditScreen)
        return dispatch(updateEmployee(params, files, onSuccess, setIsSaving))
      dispatch(addEmployee(params, files, onSuccess, setIsSaving))
    },
    deleteProject: props => id => {
      const {dispatch} = props
      dispatch(deleteEmployee(id))
    }
  }),
  lifecycle({
    componentDidMount() {
      const {
        params,
        setInitialData,
        setFetchInitialData: spinner,
        dispatch,
        isEditScreen
      } = this.props
      if (isEditScreen)
        return dispatch(
          fetchSingleEmployee(params?.id, setInitialData, spinner)
        )
      return spinner(false)
    }
  })
)(CreateEmployee)
