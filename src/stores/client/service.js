import Request from 'utils/request'

export const fetchClients = () => Request.get('client')
export const fetchSingleClient = id => Request.get(`client/${id}`)

export const addClient = data => Request.post('client', data)
export const addClientFile = (id, file) =>
  Request.put(`client/file/${id}`, file, {withFormData: true})

export const updateClient = (id, data) =>
  Request.put(`client/${id}`, data, {withFormData: true})

export const deleteClient = id => Request.delete(`client/${id}`)
