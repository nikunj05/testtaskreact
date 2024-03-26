import React, {Fragment} from 'react'
import {ViewData} from 'components'
import {toNumber} from 'lodash'
import {formattedDate, hasObjectLength} from 'utils'

export default props => {
  const {leaveData} = props
  if (!hasObjectLength(leaveData)) return <Fragment />

  const {
    start_date,
    leave_type,
    number_of_leaves,
    reason,
    end_date,
    employee: {employee_name, designation}
  } = leaveData
  const isMultiLeave = toNumber(number_of_leaves) > 1
  const leaveDate = isMultiLeave
    ? `${formattedDate(start_date)} to ${formattedDate(end_date)}`
    : formattedDate(start_date)
  return (
    <div class="w-full">
      <div class="grid gap-4 my-5 md:grid-cols-1 lg:grid-cols-2">
        <ViewData label="Employee Name" value={employee_name} />
        <ViewData label="Employee Designation" value={designation} />
        <ViewData label="Leave Date" value={leaveDate} />
        <ViewData label="Leave Type" value={leave_type.name} />
        <ViewData label="Leave Reason" value={reason} />
      </div>
    </div>
  )
}
