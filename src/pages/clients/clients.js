import React from 'react'
import {BaseButton, DataTable, Title} from 'components'
import DeleteModal from './partials/client-delete-modal'
import DeleteClientModalService from './partials/client-delete-modal-service'
import paths, {editRoute} from 'navigation/navigation-routes'

export default props => {
  const {t, clients = [], fetchInitialData, history, actionLoader} = props
  const addNew = () => history.push(paths.ADD_CLIENT)
  const onEdit = ({_id}) => history.push(editRoute(paths.EDIT_CLIENT, _id))
  const onDelete = ({_id}) => DeleteClientModalService.openModal(_id)

  return (
    <>
      <Title
        title={t('header.clients')}
        onClick={addNew}
        buttonLabel="+ Add new client"
      />
      <DataTable
        actionLoader={actionLoader}
        loading={fetchInitialData}
        data={clients}
        avatar="client_profile_image"
        pickItems={[
          'client_name',
          'email',
          'phone',
          'country',
          'designation',
          'company_name'
        ]}
        onDelete={onDelete}
        onEdit={onEdit}
      />
      <DeleteModal {...props} />
    </>
  )
}
