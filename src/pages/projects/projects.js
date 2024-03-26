import React from 'react'
import {BaseButton, DataTable, Title} from 'components'
import DeleteModal from './partials//project-delete-modal'
import DeleteProjectModalService from './partials/project-delete-modal-service'
import paths, {editRoute} from 'navigation/navigation-routes'

export default props => {
  const {projects = [], history, fetchInitialData, actionLoader} = props
  const onView = data => history.push(editRoute(paths.VIEW_PROJECT, data._id))
  const addNew = () => history.push(paths.ADD_PROJECT)
  const onEdit = ({_id}) => history.push(editRoute(paths.EDIT_PROJECT, _id))
  const onDelete = ({_id}) => DeleteProjectModalService.openModal(_id)

  return (
    <>
      <Title
        title={'Projects'}
        onClick={addNew}
        buttonLabel="+ Add new project"
      />
      <DataTable
        actionLoader={actionLoader}
        loading={fetchInitialData}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
        data={projects}
        pickItems={['name', 'client_name', 'start_date', 'end_date', 'cost']}
      />
      <DeleteModal {...props} />
    </>
  )
}
