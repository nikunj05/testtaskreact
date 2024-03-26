import React, {useEffect, useState} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from '@windmill/react-ui'
import CreateProjectTypeModalService from './type-create-modal-service'
import CreateProjectTypeForm from './type-form'
import {BaseButton} from 'components'

export default props => {
  const {isSaving} = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const openModal = (edit = false) => {
    setIsModalOpen(true)
    setIsEdit(edit)
  }
  const closeModal = () => {
    const {setFormData} = props
    setIsModalOpen(false)
    setIsEdit(false)
    setFormData(null)
  }

  useEffect(() => {
    CreateProjectTypeModalService.setModalReference({openModal, closeModal})
    return
  })

  const onSave = data => {
    const {handleSubmit, onSubmit} = props
    handleSubmit(onSubmit)(data, isEdit)
  }

  const header = isEdit ? 'Update ProjectType' : 'Create New ProjectType'
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>
        <CreateProjectTypeForm {...props} />
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
          <BaseButton loading={isSaving} onClick={onSave} label={'Save'} />
        </div>
      </ModalFooter>
    </Modal>
  )
}
