import {compose, lifecycle, withState} from 'recompose'
import ClientDropdown from './client-dropdown'
import {connect} from 'react-redux'
import {fetchClients} from 'stores/client/actions'

const mapStateToProps = state => ({
  clients: state?.client?.clients ?? []
})

export default compose(
  connect(mapStateToProps),
  withState('isOpen', 'setIsOpen', false),
  lifecycle({
    componentDidMount() {
      const onSuccess = data => {}
      const onFail = e => {}
      const payload = {onSuccess, onFail}
      this.props.dispatch(fetchClients(payload))
    }
  })
)(ClientDropdown)
