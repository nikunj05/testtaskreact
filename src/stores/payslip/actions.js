import * as types from './types'

export const fetchPayslips = (id, onSuccess = () => {}) => ({
  type: types.FETCH_PAYSLIPS,
  payload: {id, onSuccess}
})

export const createPayslip = (params, onSuccess, spinner) => ({
  type: types.CREATE_PAYSLIP,
  payload: {params, onSuccess, spinner}
})

export const deletePayslip = (id, employeeId, spinner = () => {}) => ({
  type: types.DELETE_PAYSLIP,
  payload: {id, employeeId, spinner}
})
