import React from 'react'
import {Field} from 'redux-form'
import {BaseInput, BaseDatePicker, BaseSelect} from 'components/base'
import {LEAVE_TYPES} from 'stores/common/helpers'
import {toNumber} from 'lodash'

export default props => {
  const {handleSubmit, formValues, onSubmit} = props
  const isMultiLeave = toNumber(formValues.number_of_leaves) > 1
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mb-10">
        <Field
          name="leave_type"
          label="Leave Type"
          displayKey={'name'}
          items={LEAVE_TYPES}
          component={BaseSelect}
        />
        <Field
          required
          label="Leave Reason"
          name="reason"
          component={BaseInput}
          type="text"
          placeholder="Leave Reason"
        />
        <Field
          required
          label="Number Of Leaves"
          name="number_of_leaves"
          component={BaseInput}
          type="text"
          placeholder="Number Of Leaves"
        />
        <Field
          label={isMultiLeave ? 'Start Date' : 'Leave Date'}
          placeholder={isMultiLeave ? 'Start Date' : 'Leave Date'}
          name="start_date"
          component={BaseDatePicker}
        />
        <Field
          show={isMultiLeave}
          label="End Date"
          placeholder="End Date"
          name="end_date"
          component={BaseDatePicker}
        />
      </div>
    </form>
  )
}
