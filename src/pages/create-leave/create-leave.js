import React from 'react'
import LeaveForm from './partials/leave-form'
import {BaseButton, Title} from 'components'
import LeaveMessage from './partials/leave-message'

export default props => {
  const {location, isSaving, handleSubmit, onSubmit} = props
  const employee = location?.params?.employee ?? {}
  const header = 'Create Leave Request'
  return (
    <>
      <Title title={header} hideButton />
      <div className="max-h-full md:max-h-screen px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <LeaveMessage {...props} />
        <LeaveForm {...props} employee={employee} />
        <BaseButton
          loading={isSaving}
          label="Save"
          className="mt-3 bg-white"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </>
  )
}
