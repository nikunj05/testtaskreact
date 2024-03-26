import {compose, lifecycle, withHandlers, withState} from 'recompose'
import CreateProject from './create-project'
import {connect} from 'react-redux'
import {
  addProject,
  deleteProject,
  fetchSingleProject,
  updateProject
} from 'stores/project/actions'
import {change, getFormValues, initialize, reduxForm} from 'redux-form'
import {hasObjectLength, hasValue} from 'utils/condition'
import {omit} from 'lodash'
import {fetchClients} from 'stores/client/actions'
import {clientsSelector} from 'stores/client/selectors'
import {employeesSelector} from 'stores/employee/selectors'
import {fetchProjectTypes} from 'stores/project-type/actions'
import {fetchEmployees} from 'stores/employee/actions'
import {routeParamsSelector} from 'stores/common/selector'
import {formattedDate} from 'utils'

const mapStateToProps = (state, {match}) => ({
  formValues: getFormValues('PROJECT_FORM')(state) || {},
  clients: clientsSelector(state),
  employeeList: employeesSelector(state),
  projectTypes: state?.projectType?.projectTypes ?? [],
  ...routeParamsSelector(match)
})

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'PROJECT_FORM'}),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('milestones', 'setMilestones', [{title: '', date: '', amount: ''}]),
  withState('employees', 'setEmployees', []),
  withState('isSaving', 'setIsSaving', false),
  withHandlers({
    setFormData: props => data =>
      props.dispatch(initialize('PROJECT_FORM', data)),
    setFormField: props => (field, value) =>
      props.dispatch(change('PROJECT_FORM', field, value))
  }),
  withHandlers({
    setInitialData: props => async data => {
      const {setFormData, setEmployees, setMilestones} = props
      setFormData({
        ...data,
        start_date: formattedDate(data.start_date),
        end_date: formattedDate(data.end_date)
      })
      const milestones = data?.milestones ?? [{title: '', date: '', amount: ''}]
      const employees = data?.employees ?? []
      setMilestones(milestones)
      setEmployees(employees)
    }
  }),
  withHandlers({
    onSubmit: props => async data => {
      if (!hasObjectLength(data)) return
      const {
        dispatch,
        setIsSaving,
        isEditScreen,
        employees,
        milestones,
        history
      } = props
      await setIsSaving(true)

      const project_files = data.project_files
      const files = hasValue(project_files) &&
        typeof project_files !== 'string' && {project_files: [...project_files]}

      let params = omit(data, ['project_files'])
      params = {...params, milestones, employees}
      const onSuccess = () => history.goBack()
      if (isEditScreen)
        return dispatch(updateProject(params, files, onSuccess, setIsSaving))
      dispatch(addProject(params, files, onSuccess, setIsSaving))
    },
    deleteProject: props => id => {
      const {dispatch} = props
      dispatch(deleteProject(id))
    }
  }),
  lifecycle({
    async componentDidMount() {
      const {
        params,
        setInitialData,
        setFetchInitialData: spinner,
        dispatch,
        isEditScreen
      } = this.props
      const id = params?.id
      await dispatch(fetchClients())
      await dispatch(fetchProjectTypes())
      await dispatch(fetchEmployees())
      if (isEditScreen)
        return await dispatch(fetchSingleProject(id, setInitialData, spinner))
      await spinner(false)
    }
  })
)(CreateProject)
