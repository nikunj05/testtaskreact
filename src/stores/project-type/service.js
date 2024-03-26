import Request from 'utils/request'

export const fetchProjectTypes = () => Request.get('project-type')
export const addProjectType = data => Request.post('project-type', data)
export const updateProjectType = (id, data) =>
  Request.put(`project-type/${id}`, data)
export const deleteProjectType = id => Request.delete(`project-type/${id}`)
