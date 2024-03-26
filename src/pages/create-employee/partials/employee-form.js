import React from 'react'
import {Field} from 'redux-form'
import {
  BaseInput,
  FileInput,
  AddressForm,
  BaseDatePicker,
  BaseRadioButton
} from 'components'
import Increments from './increment'
import EmployeeCredentials from './employee-credentials'
import {NOTICE_PERIOD_OPTIONS} from 'stores/employee/helpers'

export default props => {
  const {handleSubmit, onSubmit} = props
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <h6 className="col-span-5 text-lg font-semibold text-left lg:col-span-1">
          Basic Info
        </h6>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="grid gap-y-6 gap-2 grid-cols-1 md:grid-cols-2 col-span-5 lg:col-span-4">
            <Field
              label="Employee Name"
              name="employee_name"
              component={BaseInput}
              type="text"
              placeholder="Employee Name"
              className="mt-1 relative w-full text-left"
            />
            <Field
              label="Phone"
              name="phone"
              component={BaseInput}
              type="text"
              placeholder="Phone"
              className="mt-1 relative w-full text-left"
            />
            <Field
              label="Email"
              name="email"
              component={BaseInput}
              className="mt-1 relative w-full text-left"
              type="email"
              placeholder="john@doe.com"
            />
            <Field
              label="Reference Mobile Number"
              name="reference_number"
              component={BaseInput}
              type="text"
              placeholder="Reference Mobile Number"
              className="mt-1 relative w-full text-left"
            />
            <Field
              label="Aadhar Card Number"
              name="aadhar_card_number"
              component={BaseInput}
              type="text"
              placeholder="Aadhar Card Number"
              className="mt-1 relative w-full text-left"
            />
            <Field
              label="Designation"
              name="designation"
              component={BaseInput}
              type="text"
              placeholder="Designation"
              className="mt-1 relative w-full text-left"
            />
            <Field
              label="Joining Date"
              name="joining_date"
              component={BaseDatePicker}
              placeholder="Joining Date"
            />
            <Field
              label="Notice Period"
              name="notice_period"
              options={NOTICE_PERIOD_OPTIONS}
              component={BaseRadioButton}
            />
          </div>
        </div>
        <AddressForm {...props} />
        <EmployeeCredentials {...props} />
        <Field
          name="employee_profile_image"
          label={'Profile Image'}
          component={FileInput}
        />
        <Increments {...props} />
      </div>
    </form>
  )
}
