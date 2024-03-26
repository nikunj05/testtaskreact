import {compose, withHandlers, withProps, withState} from 'recompose'
import CreateLeave from './create-leave'
import {connect} from 'react-redux'
import {getFormValues, reduxForm} from 'redux-form'
import {hasObjectLength} from 'utils/condition'
import {createLeave} from 'stores/leave/actions'
import {LEAVE_FORM} from 'stores/leave/types'
import {userDetailsSelector} from 'stores/auth/selectors'
import {leaveDataSelector, leavesSelector} from 'stores/leave/selectors'
import {toNumber} from 'lodash'
import {formattedDate} from 'utils'

const mapStateToProps = (state, {location}) => ({
  formValues: getFormValues(LEAVE_FORM)(state) || {},
  employee: userDetailsSelector(state),
  leaves: leavesSelector(state),
  ...leaveDataSelector(state)
})

export default compose(
  connect(mapStateToProps),
  reduxForm({form: LEAVE_FORM}),
  withState('isSaving', 'setIsSaving', false),
  withProps(props => {
    const {formValues, remainLeave} = props
    const is_exceed = toNumber(formValues.number_of_leaves) > remainLeave
    return {is_exceed}
  }),
  withHandlers({
    onSubmit: props => async data => {
      if (!hasObjectLength(data)) return
      const {dispatch, employee, setIsSaving, history, is_exceed} = props
      await setIsSaving(true)
      const params = {
        ...data,
        employee,
        status: 'pending',
        is_exceed,
        start_date: formattedDate(data.start_date),
        end_date: formattedDate(data.end_date)
      }
      const onSuccess = data => history.goBack()
      dispatch(createLeave(params, onSuccess, setIsSaving))
    }
  })
)(CreateLeave)
