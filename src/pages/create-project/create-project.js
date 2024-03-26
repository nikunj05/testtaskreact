import React from 'react'
import ProjectForm from './partials/project-form'
import {Title, Loader, BaseButton} from 'components'

export default props => {
  const {isEditScreen, isSaving, fetchInitialData, handleSubmit, onSubmit} =
    props
  if (fetchInitialData) return <Loader />
  const header = isEditScreen ? 'Update Project' : 'Create New Project'
  return (
    <>
      <Title title={header} hideButton />
      <div className="max-h-full md:max-h-screen px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <ProjectForm {...props} />
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
