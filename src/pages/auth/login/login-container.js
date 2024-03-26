import {compose, withHandlers, withState} from 'recompose'
import Login from './login'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {login} from 'stores/auth/actions'
import path from 'navigation/navigation-routes'
import {hasObjectLength} from 'utils'

const mapStateToProps = state => ({})

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'LOGIN_FORM'}),
  withState('isSaving', 'setIsSaving', false),
  withHandlers({
    onSubmit: props => async data => {
      const {
        dispatch,
        history,
        setIsSaving,
        location: {params}
      } = props
      await setIsSaving(true)
      const onSuccess = () => {
        if (!hasObjectLength(params)) return
        const {action, id} = params
        const pathname = `${path.LEAVE}/${action}/${id}`
        history.push({pathname})
      }
      dispatch(login(data, onSuccess, setIsSaving))
    }
  })
)(Login)
