import {createSelector} from 'reselect'
import {formattedDate, hasLength, isPositive} from 'utils'
import {filter, sum, toNumber} from 'lodash'

const leaveStore = state => state?.leave

export const leavesSelector = createSelector(leaveStore, store =>
  formattedLeaves(store.leaves)
)
export const leaveDataSelector = createSelector(leaveStore, s => leaveData(s))

const leaveData = data => {
  const {
    leaves,
    leaveData: {totalCasual, totalSick}
  } = data
  const isSickLeave = item => item.leave_type.type === 'sick_leave'
  const casualLeave = filter(leaves, item => !isSickLeave(item)).length
  const sickLeave = filter(leaves, item => isSickLeave(item)).length
  const takenLeave = sum([casualLeave, sickLeave])
  const totalLeave = totalCasual + totalSick
  const remailCasual = totalCasual - casualLeave
  const remailSick = totalSick - sickLeave
  const remainLeave = totalLeave - takenLeave

  return {
    totalLeave,
    totalCasual,
    totalSick,
    casualLeave,
    sickLeave,
    takenLeave,
    remainLeave: isPositive(remainLeave) ? remainLeave : 0,
    remailCasual: isPositive(remailCasual) ? remailCasual : 0,
    remailSick: isPositive(remailSick) ? remailSick : 0
  }
}
const formattedLeaves = leaves => {
  if (!hasLength(leaves)) return []
  return leaves.map(leave => {
    const {
      number_of_leaves,
      created,
      start_date,
      end_date,
      employee,
      leave_type
    } = leave
    const isMultiLeave = toNumber(number_of_leaves) > 1
    const leave_date = isMultiLeave
      ? `${formattedDate(start_date)} to ${formattedDate(end_date)}`
      : formattedDate(start_date)
    const created_at = formattedDate(created)

    return {
      ...leave,
      leave_date,
      created_at,
      leaves: number_of_leaves,
      type: leave_type.name,
      employee_name: employee.employee_name,
      designation: employee.designation
    }
  })
}
