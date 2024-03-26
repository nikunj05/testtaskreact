import React from 'react'
import {Field} from 'redux-form'
import {BaseInput} from 'components'

export default ({isEditScreen}) => (
  <div className="space-y-3 pb-5">
    <Field
      hideError={isEditScreen}
      label="New Password"
      name="password"
      component={BaseInput}
      type="password"
      placeholder="New Password"
      className="mt-1"
    />
    <Field
      hideError={isEditScreen}
      label="Confirm New Password"
      name="confirm_password"
      component={BaseInput}
      className="mt-1"
      type="password"
      placeholder="Confirm New Password"
    />
  </div>
)
