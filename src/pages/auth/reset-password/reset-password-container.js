import {compose, withHandlers, withState} from 'recompose'
import ResetPassword from './reset-password'
import {connect} from 'react-redux'
import {getFormValues, reduxForm} from 'redux-form'
import {hasObjectLength, hasTextLength} from 'utils/condition'
import {RESET_PASSWORD_FORM} from 'stores/auth/types'
import {resetPassword} from 'stores/auth/actions'
import paths from 'navigation/navigation-routes'
import {employeeValidator as validate} from 'stores/employee/validator'
import queryString from 'query-string'

const mapStateToProps = state => ({
  formValues: getFormValues(RESET_PASSWORD_FORM)(state) || {}
})

export default compose(
  connect(mapStateToProps),
  reduxForm({form: RESET_PASSWORD_FORM, validate}),
  withState('isSaving', 'setIsSaving', false),
  withHandlers({
    onSubmit: props => async data => {
      const {dispatch, history, location, setIsSaving} = props
      await setIsSaving(true)
      const query = queryString.parse(location.search)
      const token = query?.token
      if (!hasTextLength(token) && !hasObjectLength(data)) return
      const onSuccess = () => history.push(paths.LOGIN)
      dispatch(resetPassword({token, ...data}, onSuccess, setIsSaving))
    }
  })
)(ResetPassword)
