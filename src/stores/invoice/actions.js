import * as types from './types'

export const fetchInvoices = payload => ({type: types.FETCH_INVOICES, payload})

export const fetchSingleInvoice = (id, onSuccess, spinner) => ({
  type: types.FETCH_SINGLE_INVOICE,
  payload: {id, onSuccess, spinner}
})

export const fetchProjectInvoices = (id, onSuccess) => ({
  type: types.FETCH_PROJECT_INVOICES,
  payload: {id, onSuccess}
})

export const addInvoice = (params, onSuccess, spinner) => ({
  type: types.ADD_INVOICE,
  payload: {params, onSuccess, spinner}
})
export const updateInvoice = (params, onSuccess, spinner) => ({
  type: types.UPDATE_INVOICE,
  payload: (params, onSuccess, spinner)
})

export const deleteInvoice = id => ({type: types.DELETE_INVOICE, payload: {id}})
