import React from 'react'
import {Field} from 'redux-form'
import {BaseInput} from 'components'

export default ({isEditScreen}) => (
  <>
    <hr className="w-full text-gray-300 mb-5 md:mb-8" />
    <h6 className="col-span-5 text-lg font-semibold text-left lg:col-span-1">
      Employee Credentials
    </h6>
    <div className="grid grid-cols-4 gap-4 mb-8">
      <div className="grid gap-y-6 gap-2 grid-cols-1 md:grid-cols-2 col-span-5 lg:col-span-4">
        <Field
          label="Company ID"
          name="company_id"
          component={BaseInput}
          type="text"
          placeholder="Company ID"
          className="mt-1"
        />
        <Field
          label="Company Email"
          name="company_email"
          component={BaseInput}
          type="text"
          placeholder="Company Email"
          className="mt-1"
        />
        <Field
          hideError={isEditScreen}
          label="Password"
          name="password"
          component={BaseInput}
          type="password"
          placeholder="Password"
          className="mt-1"
        />
        <Field
          hideError={isEditScreen}
          label="Confirm Password"
          name="confirm_password"
          component={BaseInput}
          className="mt-1"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
    </div>
  </>
)
