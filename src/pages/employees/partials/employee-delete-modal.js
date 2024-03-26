import React, {useEffect, useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from '@windmill/react-ui'
import DeleteEmployeeModalService from './employee-delete-modal-service'
import {BaseButton} from 'components'

export default props => {
  const {deleteEmployee} = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [employeeId, setEmployeeId] = useState(null)
  const openModal = id => {
    id && setEmployeeId(id)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
    setEmployeeId(null)
  }
  useEffect(() => {
    DeleteEmployeeModalService.setModalReference({openModal, closeModal})
    return
  })

  const onDelete = () => {
    if (employeeId) deleteEmployee(employeeId)
    closeModal()
  }

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalHeader>Employee {employeeId}</ModalHeader>
      <ModalBody>Are you sure you want to delete this employee ?</ModalBody>
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
          <BaseButton onClick={onDelete} label={'Delete Employee'} />
        </div>
      </ModalFooter>
    </Modal>
  )
}
