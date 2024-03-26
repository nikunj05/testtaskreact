import {compose, lifecycle, withState} from 'recompose'
import Payslips from './payslips'
import {connect} from 'react-redux'
import {fetchPayslips} from 'stores/payslip/actions'
import {payslipsSelector} from 'stores/payslip/selectors'
import {userDetailsSelector, userRoleSelector} from 'stores/auth/selectors'
import {routeParamsSelector} from 'stores/common/selector'

const mapStateToProps = (state, {match}) => ({
  payslips: payslipsSelector(state),
  user: userDetailsSelector(state),
  ...userRoleSelector(state),
  ...routeParamsSelector(match)
})

export default compose(
  connect(mapStateToProps),
  withState('fetchInitialData', 'setFetchInitialData', true),
  lifecycle({
    componentDidMount() {
      const {user, isAdmin, setFetchInitialData, dispatch, params} = this.props
      const id = isAdmin ? params?.id : user._id
      const onSuccess = () => setFetchInitialData(false)
      dispatch(fetchPayslips(id, onSuccess))
    }
  })
)(Payslips)
