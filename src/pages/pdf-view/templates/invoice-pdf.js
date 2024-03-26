import React from 'react'
import Logo from 'assets/img/logo.png'
import {ImagePDF, TextPDF as Text, ViewPDF as View, ViewData} from 'components'
import {CurrencyFormat, formattedAddress, formattedDate} from 'utils'
import {BANK_ACCOUNT_DETAILS, COMPANY_DETAILS} from 'config/config-api'

export default props => {
  const {data} = props
  const {
    invoice_number,
    invoice_date,
    items,
    taxName,
    taxValue,
    subtotal,
    total,
    project,
    project: {
      project_name,
      client: {company_name, address}
    }
  } = data
  const currency = project?.currency ?? {}

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

  const BILLING_DETAILS = (
    <View class="pb-10">
      <Text
        class="font-bold"
        style={{textDecoration: 'underline'}}
        text="Billing  Details"
      />
      <View class="flex-row justify-between">
        <View class="width-50% pr-50">
          <Text text="To," />
          <Text text={company_name} />
          <Text class="my-2" text={formattedAddress(address)} />
        </View>
        <View class="flex-1">
          <ViewData pdfData label="Invoice No." value={invoice_number} />
          <ViewData pdfData label="Project Name" value={project_name} />
          <ViewData
            pdfData
            label="Invoice Date"
            value={formattedDate(invoice_date)}
          />
        </View>
      </View>
    </View>
  )

  const ITEMS = (
    <View class="my-20 border-b-w-1 border-t-w-1 border-gray-200">
      <View class="flex-row border-b-w-1 border-gray-200 justify-between items-center pb-5 my-5 ">
        <Text class="leading-0 font-bold" text="Item" />
        <Text class="leading-0 font-bold" text="Amount" />
      </View>
      {items.map(({name, amount}, i) => (
        <View key={i} class="my-3 flex-row justify-between items-center">
          <Text class="mb-2" text={name} />
          <Text class="mb-2" text={CurrencyFormat(amount, currency)} />
        </View>
      ))}
    </View>
  )

  const BANK_DETAILS = (
    <View class="py-10 mb-10 height-100 border-t-w-1 border-gray-light-300">
      <Text
        class="font-bold mb-8"
        style={{textDecoration: 'underline'}}
        text="Bank Details"
      />
      <ViewData
        pdfData
        multiple
        label="Account Holder"
        value={BANK_ACCOUNT_DETAILS.account_holder}
        label2="Account No."
        value2={BANK_ACCOUNT_DETAILS.account_no}
      />
      <ViewData
        pdfData
        label="Swift Code"
        value={BANK_ACCOUNT_DETAILS.swift_code}
        multiple
        label2="IFSC code"
        value2={BANK_ACCOUNT_DETAILS.swift_code}
      />
      <ViewData
        pdfData
        multiple
        label="Bank Name"
        value={BANK_ACCOUNT_DETAILS.bank_name}
        label2="Bank Address"
        value2={BANK_ACCOUNT_DETAILS.bank_address}
      />
    </View>
  )

  const FINAL_AMOUNT = (
    <View class="width-40% self-end justify-center pt-10">
      <ViewData
        amountView
        pdfData
        currency={currency}
        label="Subtotal"
        value={subtotal}
      />
      <ViewData
        amountView
        pdfData
        currency={currency}
        label={taxName}
        value={taxValue}
      />
      <ViewData
        amountView
        pdfData
        currency={currency}
        label="Total"
        value={total}
      />
    </View>
  )
  return (
    <View class="width-92% self-center flex-1">
      {HEADER}
      {BILLING_DETAILS}
      {BANK_DETAILS}
      {ITEMS}
      {FINAL_AMOUNT}
    </View>
  )
}
