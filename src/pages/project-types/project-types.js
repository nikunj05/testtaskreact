import React from 'react'
import {BaseButton, DataTable, Title} from 'components'
import DeleteModal from './partials/type-delete-modal'
import CreateModal from './partials/type-create-modal'
import DeleteProjectTypeModalService from './partials/type-delete-modal-service'
import CreateProjectTypeModalService from './partials/type-create-modal-service'

export default props => {
  const {
    projectTypes = [],
    openEditModal,
    fetchInitialData,
    actionLoader
  } = props
  const addNew = () => CreateProjectTypeModalService.openModal(null)
  const onEdit = item => openEditModal(item)
  const onDelete = ({_id}) => DeleteProjectTypeModalService.openModal(_id)

  return (
    <>
      <Title
        title={'Project Types'}
        onClick={addNew}
        buttonLabel="+ Add new project type"
      />
      <DataTable
        actionLoader={actionLoader}
        loading={fetchInitialData}
        data={projectTypes}
        pickItems={['name', 'created']}
        onDelete={onDelete}
        onEdit={onEdit}
      />
      <DeleteModal {...props} />
      <CreateModal {...props} />
    </>
  )
}
