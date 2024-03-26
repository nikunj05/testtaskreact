import Request from 'utils/request'

export const fetchInvoices = () => Request.get('invoice')

export const fetchProjectInvoices = id =>
  Request.get(`invoice/project-inv/${id}`)

export const fetchSingleInvoice = id => Request.get(`invoice/${id}`)

export const addInvoice = params => Request.post('invoice', params)

export const addInvoiceFile = (id, file) =>
  Request.put(`invoice/file/${id}`, file, {withFormData: true})

export const updateInvoice = (id, data) => Request.put(`invoice/${id}`, data)

export const deleteInvoice = id => Request.delete(`invoice/${id}`)
