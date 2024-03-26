import {createSelector} from 'reselect'
import {orderBy, filter} from 'lodash'
import {CurrencyFormat, hasLength, monthYearDate} from 'utils'

const payslipStore = state => state?.payslip

export const payslipsSelector = createSelector(payslipStore, store =>
  formattedPayslips(store.payslips)
)

export const formattedPayslips = items => {
  if (!hasLength(items)) return []
  const filteredItem = (value1, index, array) =>
    array.findIndex(value2 => value2.payslip === value1.payslip) === index

  const item = payslip => ({
    ...payslip,
    payslip: monthYearDate(payslip.start_date),
    employee_name: payslip.employee.employee_name,
    designation: payslip.employee.designation,
    amount: CurrencyFormat(payslip.total)
  })

  return filter(orderBy(items.map(item), ['created'], ['desc']), filteredItem)
}
