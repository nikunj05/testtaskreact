import React from 'react'
import Logo from 'assets/img/logo.png'
import {ImagePDF, TextPDF as Text, ViewPDF as View, ViewData} from 'components'
import {CurrencyFormat, monthYearDate} from 'utils'
import {COMPANY_DETAILS} from 'config/config-api'

const AmountView = props => (
  <View
    class={`my-3 flex-row justify-between items-center ${props?.['container-class']}`}>
    <Text class="mb-2" text={props.label} />
    <Text class="mb-2" text={CurrencyFormat(props.value)} />
  </View>
)
export default props => {
  const {data} = props

  const {
    start_date,
    basic_salary,
    deductions,
    leave_deduction,
    professional_tax,
    total,
    employee: {employee_name, designation}
  } = data

  const HEADER = (
    <View class="flex-row justify-between py-20 mb-10 border-b-w-1 border-gray-light-300">
      <View class="flex-1 justify-center">
        <ImagePDF source={Logo} class="width-75%" />
      </View>
      <View class="flex-1">
        <Text class="font-bold" text={COMPANY_DETAILS.name} />
        <Text text={COMPANY_DETAILS.address} />
        <Text text={`Contact No. : ${COMPANY_DETAILS.phone}`} />
        <Text text={`E-mail : ${COMPANY_DETAILS.email}`} />
      </View>
    </View>
  )

  const EMPLOYEE_DETAILS = (
    <View class="pb-10">
      <ViewData
        pdfData
        label="Pay Slip"
        className="mb-18"
        label-class="min-w-120"
        value={monthYearDate(start_date)}
      />
      <ViewData
        pdfData
        className="mb-18"
        label-class="min-w-120"
        label="Employee Name"
        value={employee_name}
      />
      <ViewData
        pdfData
        className="mb-18"
        label-class="min-w-120"
        label="Designation"
        value={designation}
      />
    </View>
  )

  const AMOUNT_DATA = (
    <View class="my-20 border-b-w-1 border-t-w-1 border-gray-200">
      <View class="flex-row border-b-w-1 border-gray-200 justify-between items-center pb-5 my-5 ">
        <Text class="leading-0 font-bold" text="Item" />
        <Text class="leading-0 font-bold" text="Amount" />
      </View>
      <AmountView label="Basic Salary" value={basic_salary} />
      <AmountView label="Deductions" value={deductions} />
      <AmountView label="Professional Tax" value={professional_tax} />
      <AmountView label="Leave Deduction" value={leave_deduction} />
      <View class="flex-row border-t-w-1 border-gray-200 justify-between items-center pt-5 my-5 ">
        <Text class="leading-0 font-bold" text="Total Amount" />
        <Text class="leading-0 font-bold" text={CurrencyFormat(total)} />
      </View>
    </View>
  )

  return (
    <View class="width-92% self-center flex-1">
      {HEADER}
      {EMPLOYEE_DETAILS}
      {AMOUNT_DATA}
      <Text text="*This is online generated slip, so no signature is required." />
    </View>
  )
}
