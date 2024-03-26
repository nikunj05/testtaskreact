import React, {Fragment} from 'react'
import {ViewData} from 'components'
import {hasObjectLength} from 'utils'

export default props => {
  const {employee} = props
  if (!hasObjectLength(employee)) return <Fragment />
  const {employee_name, phone, email, designation, company_email, company_id} =
    employee
  return (
    <div className="w-full">
      <h6 className="col-span-5 text-lg font-semibold text-left lg:col-span-1">
        Employee Details
      </h6>
      <div className="grid grid-cols-1 sm:grid-cols-3 col-span-3 lg:col-span-4 mb-5">
        <ViewData label="Employee Name" value={employee_name} />
        <ViewData label="Designation" value={designation} />
        <ViewData label="Phone" value={phone} />
        <ViewData label="Email" value={email} />
        <ViewData label="Company Id" value={company_id} />
        <ViewData label="Company Email" value={company_email} />
      </div>
    </div>
  )
}
