import {compose, lifecycle, withHandlers, withState} from 'recompose'
import CreateClient from './create-client'
import {connect} from 'react-redux'
import {change, getFormValues, initialize, reduxForm} from 'redux-form'
import {hasObjectLength, hasValue} from 'utils/condition'
import {omit} from 'lodash'
import {
  addClient,
  deleteClient,
  fetchSingleClient,
  updateClient
} from 'stores/client/actions'
import {routeParamsSelector} from 'stores/common/selector'

const mapStateToProps = (state, {match}) => ({
  formValues: getFormValues('CLIENT_FORM')(state) || {},
  ...routeParamsSelector(match)
})

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'CLIENT_FORM'}),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('isSaving', 'setIsSaving', false),
  withHandlers({
    setFormData: props => data =>
      props.dispatch(initialize('CLIENT_FORM', data)),
    setFormField: props => (field, value) =>
      props.dispatch(change('CLIENT_FORM', field, value))
  }),
  withHandlers({
    setInitialData: props => async data => {
      const {setFormData} = props
      setFormData(data)
    }
  }),
  withHandlers({
    onSubmit: props => async data => {
      if (!hasObjectLength(data)) return
      const {dispatch, setIsSaving, isEditScreen, history} = props
      await setIsSaving(true)
      const client_profile_image = data.client_profile_image
      const files = hasValue(client_profile_image) &&
        typeof client_profile_image !== 'string' && {client_profile_image}
      let params = omit(data, ['client_profile_image'])
      const onSuccess = () => history.goBack()
      if (isEditScreen)
        return dispatch(updateClient(params, files, onSuccess, setIsSaving))
      dispatch(addClient(params, files, onSuccess, setIsSaving))
    },
    deleteProject: props => id => {
      const {dispatch} = props
      dispatch(deleteClient(id))
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
        return dispatch(fetchSingleClient(params?.id, setInitialData, spinner))
      return spinner(false)
    }
  })
)(CreateClient)
