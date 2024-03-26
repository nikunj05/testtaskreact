import {compose, lifecycle, withHandlers, withState} from 'recompose'
import Employees from './employees'
import {connect} from 'react-redux'
import {deleteEmployee, fetchEmployees} from 'stores/employee/actions'
import {employeesSelector} from 'stores/employee/selectors'

const mapStateToProps = state => ({
  employees: employeesSelector(state)
})

export default compose(
  connect(mapStateToProps),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('actionLoader', 'setActionLoader', false),
  withHandlers({
    deleteEmployee: props => async id => {
      const {dispatch, setActionLoader} = props
      await setActionLoader(true)
      dispatch(deleteEmployee(id, setActionLoader))
    }
  }),
  lifecycle({
    componentDidMount() {
      const {setFetchInitialData, dispatch} = this.props
      const onSuccess = () => setFetchInitialData(false)
      dispatch(fetchEmployees(onSuccess))
    }
  })
)(Employees)
