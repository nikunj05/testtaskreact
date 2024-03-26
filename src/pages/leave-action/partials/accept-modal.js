import React, {useEffect, useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from '@windmill/react-ui'
import AcceptLeaveModalService from './accept-modal-service'
import {BaseButton} from 'components'

export default props => {
  const {acceptRequest} = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  useEffect(() => {
    AcceptLeaveModalService.setModalReference({openModal, closeModal})
    return
  })

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalHeader>Accept Leave Request</ModalHeader>
      <ModalBody>
        Are you sure you want to accept this leave request ?
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
          <BaseButton onClick={acceptRequest} label={'Accept'} />
        </div>
      </ModalFooter>
    </Modal>
  )
}
