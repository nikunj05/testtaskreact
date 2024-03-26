import React from 'react'
import {Field} from 'redux-form'
import {BaseInput, BaseSelect} from 'components'
import {COUNTRIES} from 'stores/common/helpers'

const FormField = props => !props.hide && <Field {...props} />

export const AddressForm = props => {
  const {showCountry = false, showOffice} = props

  return (
    <>
      <hr className="w-full text-gray-300 mb-5 md:mb-8" />
      <h6 className="col-span-5 text-lg font-semibold text-left lg:col-span-1">
        Address
      </h6>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="grid gap-y-6 gap-2 grid-cols-1 md:grid-cols-2 col-span-5 lg:col-span-4">
          <FormField
            hide={!showOffice}
            label="Office No"
            name="address.office_no"
            component={BaseInput}
            type="text"
            placeholder="Office No"
            className="mt-1"
          />
          <FormField
            label="Building Name"
            name="address.building_name"
            component={BaseInput}
            type="text"
            placeholder="Building Name"
            className="mt-1"
          />
          <FormField
            label="Street"
            name="address.street"
            component={BaseInput}
            className="mt-1"
            type="email"
            placeholder="Street"
          />
          <FormField
            label="Town"
            name="address.town"
            component={BaseInput}
            type="text"
            placeholder="Town"
            className="mt-1"
          />
          <FormField
            label="City"
            name="address.city"
            component={BaseInput}
            type="text"
            placeholder="City"
            className="mt-1"
          />
          <FormField
            label="State"
            name="address.state"
            component={BaseInput}
            type="text"
            placeholder="State"
            className="mt-1 mb-2"
          />
          <FormField
            hide={!showCountry}
            name="address.country"
            label="Country"
            displayKey={'name'}
            items={COUNTRIES}
            component={BaseSelect}
          />
          <FormField
            label="Zipcode"
            name="address.zipcode"
            component={BaseInput}
            type="text"
            placeholder="Zipcode"
            className="mt-1 mb-2"
          />
        </div>
      </div>
    </>
  )
}
