import React from 'react'
import {DataTable} from 'components'
import {connect} from 'react-redux'
import {compose, lifecycle, withHandlers, withState} from 'recompose'
import {deletePayslip, fetchPayslips} from 'stores/payslip/actions'
import {formattedPayslips, payslipsSelector} from 'stores/payslip/selectors'
import paths from 'navigation/navigation-routes'
import {pdfTemplates} from 'stores/common/helpers'
import PayslipDeleteModal from './payslip-delete-modal'
import DeletePayslipModalService from './payslip-delete-modal-service'

const Payslips = props => {
  const {payslips, history, fetchInitialData, actionLoader} = props
  const onView = data =>
    history.push({
      pathname: paths.PDF_VIEW,
      params: {data, template: pdfTemplates.payslip}
    })
  const onDelete = ({_id}) => DeletePayslipModalService.openModal(_id)

  return (
    <>
      <DataTable
        actionLoader={actionLoader}
        loading={fetchInitialData}
        data={formattedPayslips(payslips)}
        onView={onView}
        pickItems={['payslip', 'amount']}
        onDelete={onDelete}
      />
      <PayslipDeleteModal {...props} />
    </>
  )
}

const mapStateToProps = (state, {match}) => ({
  payslips: payslipsSelector(state)
})

export default compose(
  connect(mapStateToProps),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('actionLoader', 'setActionLoader', false),
  withHandlers({
    deletePayslip: props => async id => {
      const {_id: employeeId, dispatch, setActionLoader} = props
      await setActionLoader(true)
      dispatch(deletePayslip(id, employeeId, setActionLoader))
    }
  }),
  lifecycle({
    componentDidMount() {
      const {_id, setFetchInitialData, dispatch} = this.props
      const onSuccess = () => setFetchInitialData(false)
      dispatch(fetchPayslips(_id, onSuccess))
    }
  })
)(Payslips)
