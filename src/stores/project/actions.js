import * as types from './types'

export const fetchProjects = (onSuccess = () => {}) => ({
  type: types.FETCH_PROJECTS,
  payload: {onSuccess}
})

export const fetchSingleProject = (id, onSuccess, spinner) => ({
  type: types.FETCH_SINGLE_PROJECT,
  payload: {id, onSuccess, spinner}
})

export const addProject = (params, files, onSuccess, spinner) => ({
  type: types.ADD_PROJECT,
  payload: {params, files, onSuccess, spinner}
})
export const updateProject = (params, files, onSuccess, spinner) => ({
  type: types.UPDATE_PROJECT,
  payload: {params, files, onSuccess, spinner}
})

export const deleteProject = (id, spinner = () => {}) => ({
  type: types.DELETE_PROJECT,
  payload: {id, spinner}
})
