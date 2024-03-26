import React, {useEffect, useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from '@windmill/react-ui'
import RejectLeaveModalService from './reject-modal-service'
import {BaseButton} from 'components'

export default props => {
  const {rejectRequest} = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  useEffect(() => {
    RejectLeaveModalService.setModalReference({openModal, closeModal})
    return
  })

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalHeader>Reject Leave Request </ModalHeader>
      <ModalBody>
        Are you sure you want to reject this leave request ?
      </ModalBody>
      <ModalFooter>
        <div className="hidden sm:block">
          <BaseButton
            className="p-button-outlined p-button-secondary"
            onClick={closeModal}
            label="Cancel"
          />
        </div>
        <div className="hidden sm:block">
          <BaseButton onClick={rejectRequest} label={'Reject'} />
        </div>
      </ModalFooter>
    </Modal>
  )
}
