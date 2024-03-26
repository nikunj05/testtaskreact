import React from 'react'
import PayslipForm from './partials/payslip-form'
import {Title, Loader, BaseButton} from 'components'
import EmployeeDetails from './partials/employee-details'
import FinalAmount from './partials/final-amount'

export default props => {
  const {fetchInitialData, isSaving, employee, handleSubmit, onSubmit} = props
  if (fetchInitialData) return <Loader />

  const header = 'Create Pay Slip'
  return (
    <>
      <Title title={header} hideButton />
      <div className="max-h-full md:max-h-screen px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <EmployeeDetails employee={employee} />
        <PayslipForm {...props} employee={employee} />
        <FinalAmount {...props} />
        <BaseButton
          loading={isSaving}
          onClick={handleSubmit(onSubmit)}
          label={'Save'}
        />
      </div>
    </>
  )
}
