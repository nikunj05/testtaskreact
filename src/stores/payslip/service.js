import Request from 'utils/request'

export const fetchPayslips = id => Request.get(`payslip/${id}`)
export const createPayslip = params => Request.post('payslip', params)
export const deletePayslip = id => Request.delete(`payslip/${id}`)
