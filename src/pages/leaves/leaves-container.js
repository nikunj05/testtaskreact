import {compose, lifecycle, withHandlers, withState} from 'recompose'
import Leaves from './leaves'
import {connect} from 'react-redux'
import {fetchLeaves, rejectLeave} from 'stores/leave/actions'
import {leaveDataSelector, leavesSelector} from 'stores/leave/selectors'
import {userDetailsSelector, userRoleSelector} from 'stores/auth/selectors'

const mapStateToProps = state => ({
  leaves: leavesSelector(state) ?? [],
  employee: userDetailsSelector(state),
  ...userRoleSelector(state),
  leaveData: leaveDataSelector(state)
})

export default compose(
  connect(mapStateToProps),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('actionLoader', 'setActionLoader', false),
  withHandlers({
    rejectRequest: props => async id => {
      const {dispatch, setActionLoader} = props
      await setActionLoader(true)
      const onSuccess = () => setActionLoader(false)
      dispatch(rejectLeave(id, props?.employee?._id, onSuccess))
    }
  }),
  lifecycle({
    componentDidMount() {
      const {
        history: {
          location: {params}
        },
        isAdmin,
        dispatch,
        employee,
        setFetchInitialData
      } = this.props
      const id = isAdmin ? params?._id : employee._id
      const onSuccess = () => setFetchInitialData(false)
      dispatch(fetchLeaves(id, onSuccess))
    }
  })
)(Leaves)
