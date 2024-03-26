import React from 'react'
import {Field} from 'redux-form'
import {BaseInput, BaseDatePicker} from 'components/base'

export default props => {
  const {handleSubmit, onSubmit} = props

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <h6 className="col-span-5 text-lg font-semibold text-left lg:col-span-1">
          Create Pay Slip
        </h6>
        <Field
          label="Payslip"
          name="start_date"
          component={BaseDatePicker}
          dateFormat="MM yy"
          view="month"
          placeholder="Payslip"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 col-span-5 lg:col-span-4 mb-5">
          <Field
            required
            label="Basic Salary"
            name="basic_salary"
            component={BaseInput}
            type="text"
            placeholder="Basic Salary"
          />
          <Field
            required
            label="Deductions"
            name="deductions"
            component={BaseInput}
            type="text"
            placeholder="Deductions"
          />
          <Field
            required
            label="Professional Tax"
            name="professional_tax"
            component={BaseInput}
            type="text"
            placeholder="Professional Tax"
          />
          <Field
            required
            label="Leave Deduction"
            name="leave_deduction"
            component={BaseInput}
            type="text"
            placeholder="Leave Deduction"
          />
        </div>
      </div>
    </form>
  )
}
