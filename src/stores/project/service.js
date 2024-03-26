import Request from 'utils/request'

export const fetchProjects = () => Request.get('project')
export const fetchSingleProject = id => Request.get(`project/${id}`)

export const addProject = params => Request.post('project', params)
export const addProjectFile = (id, file) =>
  Request.put(`project/file/${id}`, file, {withFile: true, withFormData: true})

export const updateProject = (id, data) => Request.put(`project/${id}`, data)

export const deleteProject = id => Request.delete(`project/${id}`)
