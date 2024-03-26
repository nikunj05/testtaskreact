import React from 'react'
import {BaseButton, ButtonView, DataTable, Title} from 'components'
import {Button} from '@windmill/react-ui'
import DeleteModal from './partials/employee-delete-modal'
import DeleteEmployeeModalService from './partials/employee-delete-modal-service'
import paths, {editRoute} from 'navigation/navigation-routes'
import {InvoiceIcon, PayslipIcon} from 'icons'

export default props => {
  const {employees = [], actionLoader, history, fetchInitialData} = props
  const onEdit = ({_id}) => history.push(editRoute(paths.EDIT_EMPLOYEE, _id))
  const addNew = () => history.push(paths.ADD_EMPLOYEE)

  const onView = async data =>
    history.push(editRoute(paths.VIEW_EMPLOYEE, data._id))

  const onDelete = ({_id}) => DeleteEmployeeModalService.openModal(_id)

  const onCreatePayslip = ({data}) =>
    history.push(editRoute(paths.CREATE_PAYSLIP, data._id))

  const navigateToPayslips = ({data}) =>
    history.push(editRoute(paths.PAYSLIPS, data._id))

  const payslips = data => (
    <ButtonView onClick={() => navigateToPayslips(data)} aria-label="Edit">
      <InvoiceIcon className="w-6 h-6" aria-hidden="true" />
    </ButtonView>
  )
  const createPayslip = data => (
    <ButtonView
      onClick={() => onCreatePayslip(data)}
      layout="link"
      size="icon"
      aria-label="Edit">
      <PayslipIcon className="w-6 h-6" aria-hidden="true" />
    </ButtonView>
  )

  return (
    <>
      <Title
        title={'Employees'}
        onClick={addNew}
        buttonLabel="+ Add new employee"
      />
      <DataTable
        actionLoader={actionLoader}
        loading={fetchInitialData}
        data={employees}
        avatar="employee_profile_image"
        pickItems={['employee_name', 'designation']}
        otherActions={[payslips, createPayslip]}
        onDelete={onDelete}
        onView={onView}
        onEdit={onEdit}
      />
      <DeleteModal {...props} />
    </>
  )
}
