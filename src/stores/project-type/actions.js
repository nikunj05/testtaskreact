import * as types from './types'

export const fetchProjectTypes = (onSuccess = () => {}) => ({
  type: types.FETCH_PROJECT_TYPES,
  payload: {onSuccess}
})
export const addProjectType = (params, callBack, spinner) => ({
  type: types.ADD_PROJECT_TYPE,
  payload: {params, callBack, spinner}
})
export const updateProjectType = (params, callBack, spinner) => ({
  type: types.UPDATE_PROJECT_TYPE,
  payload: {params, callBack, spinner}
})
export const deleteProjectType = (id, spinner = () => {}) => ({
  type: types.DELETE_PROJECT_TYPE,
  payload: {id, spinner}
})
