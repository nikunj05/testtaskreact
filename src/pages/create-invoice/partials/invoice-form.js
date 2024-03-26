import React from 'react'
import {Field} from 'redux-form'
import {BaseInput, BaseSelect, BaseDatePicker} from 'components/base'
import {formattedAddress, hasObjectLength, isBooleanTrue} from 'utils'
import {ViewData} from 'components'
import Items from './items'
import FinalAmount from './final-amount'

export default props => {
  const {handleSubmit, projects, onSubmit, formValues} = props
  const showCustomer = isBooleanTrue(hasObjectLength(formValues?.project))
  const client = formValues?.project?.client ?? {}
  const billingDetails = (
    <div className="col-span-12 my-3">
      <h6 className="col-span-5 text-lg font-semibold text-left lg:col-span-1">
        Billing Details
      </h6>
      <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <>
          <ViewData label="Client Name" value={client.client_name} />
          <ViewData
            label="Client Job Details"
            value={`${client.designation} at ${client.company_name}`}
          />
        </>
        <ViewData
          label="Billing Address"
          value={formattedAddress(client?.address)}
        />
      </div>
    </div>
  )
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full py-3">
        <div className="grid gap-y-6 gap-4 grid-cols-1 md:grid-cols-2 col-span-5 lg:col-span-4">
          <Field
            required
            label="Invoice Number"
            name="invoice_number"
            component={BaseInput}
            type="text"
            inputName="INV-"
            placeholder="Invoice Number"
            className="my-2"
          />
          <Field
            items={projects}
            name="project"
            placeholder="Select Project"
            label="Project"
            displayKey="project_name"
            required
            className="my-2"
            component={BaseSelect}
          />
          <Field
            label="Invoice Date"
            name="invoice_date"
            component={BaseDatePicker}
            placeholder="Invoice Date"
          />
          <Field
            label="Due Date"
            name="due_date"
            component={BaseDatePicker}
            placeholder="Due Date"
          />
        </div>
        <Items {...props} />
        {showCustomer && billingDetails}
        <FinalAmount {...props} />
      </div>
    </form>
  )
}
