import Request from 'utils/request'

export const fetchEmployees = () => Request.get('employee')
export const fetchSingleEmployee = id => Request.get(`employee/${id}`)

export const addEmployee = data => Request.post('employee', data)
export const addEmployeeFile = (id, file) =>
  Request.put(`employee/file/${id}`, file, {withFormData: true})

export const updateEmployee = (id, data) => Request.put(`employee/${id}`, data)

export const deleteEmployee = id => Request.delete(`employee/${id}`)

export const changeEmployeePassword = data =>
  Request.put('employee/change-password', data)
