import {compose} from 'recompose'
import Navigation from './navigation'
import {connect} from 'react-redux'
import {checkUserIsLoginSelector, userRoleSelector} from 'stores/auth/selectors'

const mapStateToProps = state => ({
  isLogin: checkUserIsLoginSelector(state),
  ...userRoleSelector(state)
})

export default compose(connect(mapStateToProps))(Navigation)
