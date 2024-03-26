import {compose, lifecycle, withHandlers, withState} from 'recompose'
import ProjectTypes from './project-types'
import {connect} from 'react-redux'
import {
  addProjectType,
  deleteProjectType,
  fetchProjectTypes,
  updateProjectType
} from 'stores/project-type/actions'
import {initialize, reduxForm} from 'redux-form'
import CreateProjectTypeModalService from './partials/type-create-modal-service'
import {hasValue} from 'utils/condition'

const mapStateToProps = state => ({
  projectTypes: state?.projectType?.projectTypes ?? []
})

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'CREATE_PROJECT_TYPE'}),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('actionLoader', 'setActionLoader', false),
  withState('isSaving', 'setIsSaving', false),
  withHandlers({
    setFormData: props => data =>
      props.dispatch(initialize('CREATE_PROJECT_TYPE', data))
  }),
  withHandlers({
    openEditModal: props => data => {
      const {setFormData} = props
      CreateProjectTypeModalService.openModal({isEdit: true})
      setFormData(data)
    }
  }),
  withHandlers({
    onSubmit: props => async data => {
      const {dispatch, setIsSaving} = props
      await setIsSaving(true)
      const onSuccess = () => CreateProjectTypeModalService.closeModal()
      if (hasValue(data?._id))
        return dispatch(updateProjectType(data, onSuccess, setIsSaving))
      dispatch(addProjectType(data, onSuccess, setIsSaving))
    },
    deleteProjectType: props => async id => {
      const {dispatch, setActionLoader} = props
      await setActionLoader(true)
      dispatch(deleteProjectType(id, setActionLoader))
    }
  }),
  lifecycle({
    componentDidMount() {
      const {setFetchInitialData, dispatch} = this.props
      const onSuccess = data => setFetchInitialData(false)
      dispatch(fetchProjectTypes(onSuccess))
    }
  })
)(ProjectTypes)
