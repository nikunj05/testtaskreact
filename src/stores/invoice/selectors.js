import {createSelector} from 'reselect'
import {hasLength} from 'utils'

const invoiceStore = state => state?.invoice

export const invoicesSelector = createSelector(invoiceStore, store =>
  formattedInvoices(store.invoices)
)

const formattedInvoices = invoices => {
  if (!hasLength(invoices)) return []
  return invoices.map(invoice => ({
    ...invoice,
    name: invoice.invoice_name,
    client_name: invoice.client.client_name,
    cost: invoice.invoice_cost
  }))
}
