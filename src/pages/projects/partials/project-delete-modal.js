import React, {useEffect, useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from '@windmill/react-ui'
import DeleteProjectModalService from './project-delete-modal-service'
import {BaseButton} from 'components'

export default props => {
  const {deleteProject} = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projectId, setProjectId] = useState(null)
  const openModal = id => {
    id && setProjectId(id)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
    setProjectId(null)
  }
  useEffect(() => {
    DeleteProjectModalService.setModalReference({openModal, closeModal})
    return
  })

  const onDelete = () => {
    if (projectId) deleteProject(projectId)
    closeModal()
  }

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalHeader>Project {projectId}</ModalHeader>
      <ModalBody>Are you sure you want to delete this project ?</ModalBody>
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
            label="Edit Project"
          />
        </div>
        <div className="hidden sm:block">
          <BaseButton onClick={onDelete} label={'Delete Project'} />
        </div>
      </ModalFooter>
    </Modal>
  )
}
