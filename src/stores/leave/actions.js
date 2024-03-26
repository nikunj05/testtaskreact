import * as types from './types'

export const fetchLeaves = (id, onSuccess = () => {}) => ({
  type: types.FETCH_LEAVES,
  payload: {id, onSuccess}
})

export const fetchSingleLeave = (id, onSuccess, spinner) => ({
  type: types.FETCH_SINGLE_LEAVE,
  payload: {id, onSuccess, spinner}
})

export const acceptLeave = (
  id,
  employeeId,
  onSuccess = () => {},
  spinner = () => {}
) => ({
  type: types.ACCEPT_LEAVE,
  payload: {id, employeeId, onSuccess, spinner}
})

export const rejectLeave = (
  id,
  employeeId,
  onSuccess = () => {},
  spinner = () => {}
) => ({
  type: types.REJECT_LEAVE,
  payload: {id, employeeId, onSuccess, spinner}
})

export const createLeave = (params, onSuccess, spinner = () => {}) => ({
  type: types.CREATE_LEAVE,
  payload: {params, onSuccess, spinner}
})
