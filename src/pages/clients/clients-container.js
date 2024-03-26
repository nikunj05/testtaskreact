import {compose, lifecycle, withHandlers, withState} from 'recompose'
import Clients from './clients'
import {connect} from 'react-redux'
import {deleteClient, fetchClients} from 'stores/client/actions'
import {initialize, reduxForm} from 'redux-form'
import {withTranslation} from 'react-i18next'

const mapStateToProps = state => ({
  clients: state?.client?.clients ?? []
})

export default compose(
  withTranslation(),
  connect(mapStateToProps),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('actionLoader', 'setActionLoader', false),
  reduxForm({form: 'CLIENT_FORM'}),
  withHandlers({
    setFormData: props => data =>
      props.dispatch(initialize('CLIENT_FORM', data))
  }),

  withHandlers({
    deleteClient: props => async id => {
      const {dispatch, setActionLoader} = props
      await setActionLoader(true)
      dispatch(deleteClient(id, setActionLoader))
    }
  }),
  lifecycle({
    componentDidMount() {
      const {dispatch, setFetchInitialData} = this.props
      const onSuccess = data => setFetchInitialData(false)
      dispatch(fetchClients(onSuccess))
    }
  })
)(Clients)
