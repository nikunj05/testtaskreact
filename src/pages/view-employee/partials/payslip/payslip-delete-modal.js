import React, {useEffect, useState} from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from '@windmill/react-ui'
import DeletePayslipModalService from './payslip-delete-modal-service'
import {BaseButton} from 'components'

export default props => {
  const {deletePayslip} = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [payslipId, setPayslipId] = useState(null)
  const openModal = id => {
    id && setPayslipId(id)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
    setPayslipId(null)
  }
  useEffect(() => {
    DeletePayslipModalService.setModalReference({openModal, closeModal})
    return
  })

  const onDelete = () => {
    if (payslipId) deletePayslip(payslipId)
    closeModal()
  }

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalHeader>Payslip {payslipId}</ModalHeader>
      <ModalBody>Are you sure you want to delete this payslip ?</ModalBody>
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
            label="Edit Payslip"
          />
        </div>
        <div className="hidden sm:block">
          <BaseButton onClick={onDelete} label={'Delete Payslip'} />
        </div>
      </ModalFooter>
    </Modal>
  )
}
