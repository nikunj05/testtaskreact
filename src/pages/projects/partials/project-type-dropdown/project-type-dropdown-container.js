import {compose, lifecycle, withState} from 'recompose'
import ProjectTypeDropdown from './project-type-dropdown'
import {connect} from 'react-redux'
import {fetchProjectTypes} from 'stores/project-type/actions'

const mapStateToProps = state => ({
  projectTypes: state?.projectType?.projectTypes ?? []
})

export default compose(
  connect(mapStateToProps),
  withState('isOpen', 'setIsOpen', false),
  withState('loading', 'setLoading', true),
  lifecycle({
    componentDidMount() {
      const {setLoafing, dispatch} = this.props
      const onSuccess = data => setLoafing(false)
      dispatch(fetchProjectTypes(onSuccess))
    }
  })
)(ProjectTypeDropdown)
