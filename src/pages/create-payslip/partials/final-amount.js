import React from 'react'
import {ViewData} from 'components'

export default ({getFinalAmountData}) => {
  const {basic_salary, deductions, professional_tax, leave_deduction, total} =
    getFinalAmountData()
  return (
    <div class="px-5 py-4 my-6 bg-white border border-gray-200 border-solid rounded md:min-w-[390px] min-w-[300px] lg:mt-7">
      <ViewData amountView label="Basic Salary" value={basic_salary} />
      <ViewData amountView label="Deductions" value={deductions} />
      <ViewData amountView label="Professional Tax" value={professional_tax} />
      <ViewData amountView label="Leave Deduction" value={leave_deduction} />
      <ViewData
        amountView
        label="Total Paid"
        value={total}
        styleClass="pt-2 mt-5 border-t border-gray-200"
      />
    </div>
  )
}
