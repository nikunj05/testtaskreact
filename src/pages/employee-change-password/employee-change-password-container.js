import {compose, withHandlers, withState} from 'recompose'
import EmployeeChangePassword from './employee-change-password'
import {connect} from 'react-redux'
import {getFormValues, reduxForm} from 'redux-form'
import {hasObjectLength} from 'utils/condition'
import {changeEmployeePassword} from 'stores/employee/actions'
import {ResetPasswordValidator as validate} from 'stores/employee/validator'
import {EMPLOYEE_PASSWORD_FORM} from 'stores/employee/types'

const mapStateToProps = state => ({
  formValues: getFormValues(EMPLOYEE_PASSWORD_FORM)(state) || {}
})

export default compose(
  connect(mapStateToProps),
  reduxForm({form: EMPLOYEE_PASSWORD_FORM, validate}),
  withState('isSaving', 'setIsSaving', false),
  withHandlers({
    onSubmit: props => async data => {
      if (!hasObjectLength(data)) return
      const {dispatch, setIsSaving} = props
      await setIsSaving(true)
      const onSuccess = () => {}
      dispatch(changeEmployeePassword(data, onSuccess, setIsSaving))
    }
  })
)(EmployeeChangePassword)
