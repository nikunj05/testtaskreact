import * as types from './types'

export const fetchEmployees = (onSuccess = () => {}) => ({
  type: types.FETCH_EMPLOYEES,
  payload: {onSuccess}
})

export const fetchSingleEmployee = (id, onSuccess, spinner) => ({
  type: types.FETCH_SINGLE_EMPLOYEE,
  payload: {id, onSuccess, spinner}
})

export const addEmployee = (params, files, onSuccess, spinner) => ({
  type: types.ADD_EMPLOYEE,
  payload: {params, files, onSuccess, spinner}
})

export const updateEmployee = (params, files, onSuccess, spinner) => ({
  type: types.UPDATE_EMPLOYEE,
  payload: {params, files, onSuccess, spinner}
})

export const deleteEmployee = (id, spinner = () => {}) => ({
  type: types.DELETE_EMPLOYEE,
  payload: {id, spinner}
})

export const changeEmployeePassword = (params, onSuccess, spinner) => ({
  type: types.CHANGE_EMPLOYEE_PASSWORD,
  payload: {params, onSuccess, spinner}
})
