import {compose, lifecycle, withHandlers, withState} from 'recompose'
import {connect} from 'react-redux'
import {acceptLeave, fetchLeaves, rejectLeave} from 'stores/leave/actions'
import {leavesSelector} from 'stores/leave/selectors'
import Leaves from './leaves'

const mapStateToProps = state => ({
  leaves: leavesSelector(state) ?? []
})

export default compose(
  connect(mapStateToProps),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('actionLoader', 'setActionLoader', false),
  withHandlers({
    acceptLeave: props => async id => {
      const {dispatch, setActionLoader} = props
      await setActionLoader(true)
      const onSuccess = () => setActionLoader(false)
      dispatch(acceptLeave(id, props._id, onSuccess))
    },
    rejectLeave: props => async id => {
      const {dispatch, setActionLoader} = props
      await setActionLoader(true)
      const onSuccess = () => setActionLoader(false)
      dispatch(rejectLeave(id, props._id, onSuccess))
    }
  }),
  lifecycle({
    componentDidMount() {
      const {_id, dispatch, setFetchInitialData} = this.props
      const onSuccess = () => setFetchInitialData(false)
      dispatch(fetchLeaves(_id, onSuccess))
    }
  })
)(Leaves)
