class Service {
  modalReference: any

  constructor() {
    this.modalReference = null
  }

  setModalReference = ref => (this.modalReference = ref)

  openModal = (edit = false) => this.modalReference?.openModal?.(edit)

  closeModal = () => this.modalReference?.closeModal?.()
}

const CreateProjectTypeModalService = new Service()
export default CreateProjectTypeModalService
