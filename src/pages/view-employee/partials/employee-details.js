import {ViewData} from 'components'
import React from 'react'
import {formattedAddress, fileUrl, formattedDate} from 'utils'
import {find} from 'lodash'
import {NOTICE_PERIOD_OPTIONS} from 'stores/employee/helpers'
import DefaultImage from 'assets/img/default.jpeg'

export default props => {
  const {
    address,
    _id,
    aadhar_card_number,
    company_id,
    company_email,
    reference_number,
    notice_period,
    email,
    phone,
    employee_name,
    designation,
    joining_date,
    employee_profile_image,
    created
  } = props
  const NoticePeriod = find(
    NOTICE_PERIOD_OPTIONS,
    item => item.value === notice_period
  )
  return (
    <div class="w-full">
      <div class="mb-10 w-full flex items-center justify-center">
        <img
          className="hidden md:block h-32 w-32 rounded-full object-contain"
          src={fileUrl(employee_profile_image)}
          onError={({currentTarget}) => {
            currentTarget.onerror = null
            currentTarget.src = DefaultImage
          }}
          alt="Employee avatar"
        />
      </div>
      <div class="grid gap-4 my-5 md:grid-cols-1 lg:grid-cols-2">
        <ViewData label="Employee ID" value={_id} />
        <ViewData label="Employee Name" value={employee_name} />
        <ViewData label="Contact No." value={phone} />
        <ViewData label="Email Address" value={email} />
        <ViewData label="Aadhar Card Number" value={aadhar_card_number} />
        <ViewData label="Address" value={formattedAddress(address)} />
        <ViewData label="Designation" value={designation} />
        <ViewData label="Joining Date" value={formattedDate(joining_date)} />
        <ViewData label="Company Id" value={company_id} />
        <ViewData label="Company Email" value={company_email} />
        <ViewData label="Reference Number" value={reference_number} />
        <ViewData label="Notice Period" value={NoticePeriod?.name} />
        <ViewData label="Created At" value={created} />
      </div>
    </div>
  )
}
