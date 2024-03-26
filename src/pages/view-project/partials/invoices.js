import {BaseButton, DataTable} from 'components'
import React from 'react'
import {compose, lifecycle, withState} from 'recompose'
import {connect} from 'react-redux'
import {fetchProjectInvoices} from 'stores/invoice/actions'
import paths from 'navigation/navigation-routes'
import {pdfTemplates} from 'stores/common/helpers'
import {formattedDate} from 'utils'

export const Invoices = props => {
  const {invoices, fetchInitialData, history} = props
  const viewInPDF = item =>
    history.push({
      pathname: paths.PDF_VIEW,
      params: {data: item, template: pdfTemplates.invoice}
    })
  const actionComponent = item => (
    <div className="items-center flex">
      <BaseButton
        label="Download Invoice"
        className="my-3"
        onClick={() => viewInPDF(item)}
      />
    </div>
  )
  return (
    <DataTable
      loading={fetchInitialData}
      sortable={false}
      data={invoices}
      actionComponent={actionComponent}
      pickItems={['invoice_number', 'due_date', 'invoice_date', 'total']}
    />
  )
}

export default compose(
  connect(),
  withState('invoices', 'setInvoices', []),
  withState('fetchInitialData', 'setFetchInitialData', true),
  lifecycle({
    componentDidMount() {
      const {dispatch, _id, setFetchInitialData, setInvoices} = this.props
      const setInvoiceData = async data => {
        await setInvoices(
          data.map(item => ({
            ...item,
            due_date: formattedDate(item.due_date),
            invoice_date: formattedDate(item.invoice_date)
          }))
        )
        setFetchInitialData(false)
      }
      dispatch(fetchProjectInvoices(_id, setInvoiceData))
    }
  })
)(Invoices)
