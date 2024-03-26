import {compose, withHandlers} from 'recompose'
import CreateAccount from './create-account'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {login} from 'stores/auth/actions'

const mapStateToProps = state => ({})

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'LOGIN_FORM'}),
  withHandlers({
    onSubmit: props => data => {
      const {dispatch} = props
      dispatch(login(data))
    }
  })
)(CreateAccount)
