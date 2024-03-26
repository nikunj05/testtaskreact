import {compose, lifecycle, withHandlers, withState} from 'recompose'
import Projects from './projects'
import {connect} from 'react-redux'
import {deleteProject, fetchProjects} from 'stores/project/actions'
import {projectsSelector} from 'stores/project/selectors'

const mapStateToProps = state => ({
  projects: projectsSelector(state) ?? []
})

export default compose(
  connect(mapStateToProps),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('actionLoader', 'setActionLoader', false),
  withHandlers({
    deleteProject: props => async id => {
      const {dispatch, setActionLoader} = props
      await setActionLoader(true)
      dispatch(deleteProject(id, setActionLoader))
    }
  }),
  lifecycle({
    componentDidMount() {
      const {setFetchInitialData, dispatch} = this.props
      const onSuccess = data => setFetchInitialData(false)
      dispatch(fetchProjects(onSuccess))
    }
  })
)(Projects)
