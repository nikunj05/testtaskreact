import React from 'react'
import InvoiceForm from './partials/invoice-form'
import {Title, Loader, BaseButton} from 'components'

export default props => {
  const {isEditScreen, isSaving, fetchInitialData, handleSubmit, onSubmit} =
    props
  const header = isEditScreen ? 'Update Project' : 'Create New Invoice'
  const RENDER_COMPONENT = fetchInitialData ? (
    <Loader />
  ) : (
    <div className="max-h-full md:max-h-screen px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <InvoiceForm {...props} />
      <BaseButton
        loading={isSaving}
        onClick={handleSubmit(onSubmit)}
        label={'Save'}
      />
    </div>
  )
  return (
    <>
      <Title title={header} hideButton />
      {RENDER_COMPONENT}
    </>
  )
}
