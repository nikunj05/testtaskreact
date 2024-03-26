import * as types from './types'

export const fetchClients = (onSuccess = () => {}) => ({
  type: types.FETCH_CLIENTS,
  payload: {onSuccess}
})

export const fetchSingleClient = (id, onSuccess, spinner) => ({
  type: types.FETCH_SINGLE_CLIENT,
  payload: {id, onSuccess, spinner}
})

export const addClient = (params, files, onSuccess, spinner) => ({
  type: types.ADD_CLIENT,
  payload: {params, files, onSuccess, spinner}
})

export const updateClient = (params, files, onSuccess, spinner) => ({
  type: types.UPDATE_CLIENT,
  payload: {params, files, onSuccess, spinner}
})

export const deleteClient = (id, spinner = () => {}) => ({
  type: types.DELETE_CLIENT,
  payload: {id, spinner}
})
