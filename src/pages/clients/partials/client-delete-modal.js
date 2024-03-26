import React, {useEffect, useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from '@windmill/react-ui'
import DeleteClientModalService from './client-delete-modal-service'
import {BaseButton} from 'components'

export default props => {
  const {deleteClient} = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [clientId, setClientId] = useState(null)
  const openModal = id => {
    id && setClientId(id)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
    setClientId(null)
  }
  useEffect(() => {
    DeleteClientModalService.setModalReference({openModal, closeModal})
    return
  })

  const onDelete = () => {
    if (clientId) deleteClient(clientId)
    closeModal()
  }

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalHeader>Client {clientId}</ModalHeader>
      <ModalBody>Are you sure you want to delete this client ?</ModalBody>
      <ModalFooter>
        <div className="hidden sm:block">
          <BaseButton
            className="p-button-outlined p-button-secondary"
            onClick={closeModal}
            label="Cancel"
          />
        </div>
        <div className="block w-full sm:hidden">
          <BaseButton
            className="p-button-outlined p-button-secondary"
            onClick={closeModal}
            label="Edit Client"
          />
        </div>
        <div className="hidden sm:block">
          <BaseButton onClick={onDelete} label={'Delete Client'} />
        </div>
      </ModalFooter>
    </Modal>
  )
}
