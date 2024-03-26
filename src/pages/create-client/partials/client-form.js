import React from 'react'
import {Field} from 'redux-form'
import {BaseInput, FileInput, AddressForm} from 'components'

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
              label="Client Name"
              name="client_name"
              component={BaseInput}
              type="text"
              placeholder="Client Name"
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
              label="Company Name"
              name="company_name"
              component={BaseInput}
              type="text"
              placeholder="Company Name"
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
          </div>
        </div>
        <AddressForm showOffice showCountry {...props} />
        <Field
          name="client_profile_image"
          label={'Profile Image '}
          component={FileInput}
        />
      </div>
    </form>
  )
}
