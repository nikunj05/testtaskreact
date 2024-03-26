import {createSelector} from 'reselect'
import {hasLength} from 'utils'

const projectStore = state => state?.project

export const projectsSelector = createSelector(projectStore, store =>
  formattedProjects(store.projects)
)

const formattedProjects = projects => {
  if (!hasLength(projects)) return []
  return projects.map(project => ({
    ...project,
    name: project.project_name,
    client_name: project.client.client_name,
    cost: project.project_cost
  }))
}
