import {createSelector} from 'reselect'
import {formattedDate, hasLength} from 'utils'

const employeeStore = state => state?.employee

export const employeesSelector = createSelector(employeeStore, store =>
  formattedEmployees(store.employees)
)

const formattedEmployees = employees => {
  if (!hasLength(employees)) return []
  return employees.map(employee => ({
    ...employee,
    joining_date: formattedDate(employee.joining_date)
  }))
}
