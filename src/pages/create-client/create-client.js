import React from 'react'
import {Title, Loader, BaseButton} from 'components'
import ClientForm from './partials/client-form'

export default props => {
  const {fetchInitialData, isEditScreen, isSaving, handleSubmit, onSubmit} =
    props
  if (fetchInitialData) return <Loader />
  const header = isEditScreen ? 'Update Client' : 'Create New Client'

  return (
    <>
      <Title title={header} hideButton />
      <div className="max-h-full md:max-h-screen px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <ClientForm {...props} />
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
