import {compose, lifecycle, withHandlers, withState} from 'recompose'
import ViewEmployee from './view-employee'
import {connect} from 'react-redux'
import {deleteEmployee, fetchSingleEmployee} from 'stores/employee/actions'
import {hasObjectLength} from 'utils/condition'
import paths from 'navigation/navigation-routes'
import {leaveDataSelector} from 'stores/leave/selectors'
import {routeParamsSelector} from 'stores/common/selector'

const mapStateToProps = (state, {match}) => ({
  leaveData: leaveDataSelector(state),
  ...routeParamsSelector(match)
})

export default compose(
  connect(mapStateToProps),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('employeeData', 'setEmployeeData', null),
  withHandlers({
    setInitialData: props => async data => {
      const {setEmployeeData} = props
      setEmployeeData(data)
    }
  }),
  withHandlers({
    deleteEmployee: props => id => props.dispatch(deleteEmployee(id))
  }),
  lifecycle({
    componentDidMount() {
      const {
        params,
        setInitialData,
        setFetchInitialData: spinner,
        dispatch,
        history
      } = this.props
      const id = params?.id
      if (!id || id === ':id') return history.push({pathname: paths.EMPLOYEES})
      dispatch(fetchSingleEmployee(id, setInitialData, spinner))
    }
  })
)(ViewEmployee)
