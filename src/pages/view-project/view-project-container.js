import {compose, lifecycle, withHandlers, withState} from 'recompose'
import ViewProject from './view-project'
import {connect} from 'react-redux'
import {deleteProject, fetchSingleProject} from 'stores/project/actions'
import paths from 'navigation/navigation-routes'
import {routeParamsSelector} from 'stores/common/selector'
import {formattedDate} from 'utils'

const mapStateToProps = (state, {match}) => ({
  ...routeParamsSelector(match)
})

export default compose(
  connect(mapStateToProps),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('projectData', 'setProjectData', null),
  withHandlers({
    setInitialData: props => async data => {
      const {setProjectData} = props
      const formattedData = {
        ...data,
        milestones: data.milestones?.map(item => ({
          ...item,
          date: formattedDate(item.date)
        }))
      }
      setProjectData(formattedData)
    }
  }),
  withHandlers({
    deleteProject: props => id => props.dispatch(deleteProject(id))
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
      if (!id || id === ':id') return history.push({pathname: paths.PROJECTS})
      dispatch(fetchSingleProject(id, setInitialData, spinner))
    }
  })
)(ViewProject)
