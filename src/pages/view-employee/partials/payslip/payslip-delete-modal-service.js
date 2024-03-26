class Service {
  modalReference: any

  constructor() {
    this.modalReference = null
  }

  setModalReference = ref => (this.modalReference = ref)

  openModal = data => this.modalReference?.openModal?.(data)

  closeModal = () => this.modalReference?.closeModal?.()
}

const DeletePayslipModalService = new Service()
export default DeletePayslipModalService
