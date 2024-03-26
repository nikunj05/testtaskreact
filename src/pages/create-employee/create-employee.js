import React from 'react'
import {Title, Loader, BaseButton} from 'components'
import EmployeeForm from './partials/employee-form'

export default props => {
  const {fetchInitialData, isSaving, isEditScreen, handleSubmit, onSubmit} =
    props
  if (fetchInitialData) return <Loader />
  const header = isEditScreen ? 'Update Employee' : 'Create New Employee'
  return (
    <>
      <Title title={header} hideButton />
      <div className="max-h-full md:max-h-screen px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <EmployeeForm {...props} />
        <BaseButton
          loading={isSaving}
          label="Save"
          className="my-3"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </>
  )
}
