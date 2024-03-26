import {compose, withHandlers, withState} from 'recompose'
import ForgotPassword from './forgot-password'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {FORGOT_PASSWORD_FORM} from 'stores/auth/types'
import {sentRecoverPasswordLink} from 'stores/auth/actions'

export default compose(
  connect(),
  reduxForm({form: FORGOT_PASSWORD_FORM}),
  withState('mailSent', 'setMailSent', false),
  withState('isSaving', 'setIsSaving', false),
  withHandlers({
    onSubmit: props => async values => {
      const {dispatch, setMailSent, setIsSaving} = props
      await setIsSaving(true)
      const onSuccess = () => setMailSent(true)
      dispatch(sentRecoverPasswordLink(values, onSuccess, setIsSaving))
    }
  })
)(ForgotPassword)
