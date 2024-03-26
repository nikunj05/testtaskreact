import {compose, lifecycle, withHandlers, withState} from 'recompose'
import {connect} from 'react-redux'
import leaveAction from './leave-action'
import {acceptLeave, fetchSingleLeave, rejectLeave} from 'stores/leave/actions'
import paths from 'navigation/navigation-routes'
import AcceptLeaveModalService from './partials/accept-modal-service'
import RejectLeaveModalService from './partials/reject-modal-service'
import {checkUserIsLoginSelector} from 'stores/auth/selectors'

const modalAction = {
  accept: AcceptLeaveModalService,
  reject: RejectLeaveModalService
}
const mapStateToProps = (state, {match}) => ({
  isLogin: checkUserIsLoginSelector(state),
  params: match.params
})
export default compose(
  connect(mapStateToProps),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('leaveData', 'setLeaveData', null),
  withHandlers({
    setInitialData: props => async data => {
      const {
        setLeaveData,
        params: {action}
      } = props
      setLeaveData(data)
      setTimeout(() => modalAction?.[action]?.openModal?.(), 1000)
    }
  }),
  withHandlers({
    rejectRequest: props => async () => {
      const {dispatch, params, history} = props
      const onSuccess = () => history.push({pathname: paths.DEFAULT})
      dispatch(rejectLeave(params.id, null, onSuccess))
    },
    acceptRequest: props => async () => {
      const {dispatch, params, history} = props
      const onSuccess = () => history.push({pathname: paths.DEFAULT})
      dispatch(acceptLeave(params.id, null, onSuccess))
    }
  }),
  lifecycle({
    componentDidMount() {
      const {
        isLogin,
        setInitialData,
        setFetchInitialData: spinner,
        dispatch,
        history,
        params
      } = this.props
      const {id} = params
      if (!isLogin) return history.push({pathname: paths.LOGIN, params})
      if (!id) return history.push({pathname: paths.DEFAULT})
      dispatch(fetchSingleLeave(id, setInitialData, spinner))
    }
  })
)(leaveAction)
