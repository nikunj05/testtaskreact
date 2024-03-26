import React, {useEffect, useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from '@windmill/react-ui'
import DeleteProjectTypeModalService from './type-delete-modal-service'
import {BaseButton} from 'components'

export default props => {
  const {deleteProjectType} = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projectTypeId, setProjectTypeId] = useState(null)
  const openModal = id => {
    id && setProjectTypeId(id)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
    setProjectTypeId(null)
  }
  useEffect(() => {
    DeleteProjectTypeModalService.setModalReference({openModal, closeModal})
    return
  })

  const onDelete = () => {
    if (projectTypeId) deleteProjectType(projectTypeId)
    closeModal()
  }

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalHeader>Project Type {projectTypeId}</ModalHeader>
      <ModalBody>Are you sure you want to delete this project type ?</ModalBody>
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
            label="Edit Project Type"
          />
        </div>
        <div className="hidden sm:block">
          <BaseButton onClick={onDelete} label={'Delete Project Type'} />
        </div>
      </ModalFooter>
    </Modal>
  )
}
