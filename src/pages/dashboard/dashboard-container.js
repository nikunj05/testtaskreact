import {connect} from 'react-redux'
import {compose, lifecycle, withState} from 'recompose'
import {userRoleSelector} from 'stores/auth/selectors'
import {clientsSelector} from 'stores/client/selectors'
import {fetchDashboard} from 'stores/dashboard/actions'
import {dashboardsSelector} from 'stores/dashboard/selectors'
import {projectsSelector} from 'stores/project/selectors'
import Dashboard from './dashboard'

const mapStateToProps = state => {
  const employees = state?.employee.employees?.length ?? 0
  const clients = clientsSelector(state)?.length ?? 0
  const projects = projectsSelector(state)?.length ?? 0
  return {
    ...userRoleSelector(state),
    dashboard: {employees, clients, projects}
  }
}

export default compose(
  connect(mapStateToProps),
  withState('fetchInitialData', 'setFetchInitialData', true),
  lifecycle({
    componentDidMount() {
      const {setFetchInitialData: spinner, dispatch, isEmployee} = this.props
      if (isEmployee) return
      dispatch(fetchDashboard(() => spinner(false)))
    }
  })
)(Dashboard)
