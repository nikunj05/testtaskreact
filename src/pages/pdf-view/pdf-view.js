import React from 'react'
import {Document, Page, StyleSheet, PDFViewer} from '@react-pdf/renderer'
import {hasObjectLength} from 'utils'
import InvoicePdf from './templates/invoice-pdf'
import PayslipPdf from './templates/payslip-pdf'

const pdfComponent = {invoice: InvoicePdf, payslip: PayslipPdf}

export default props => {
  const params = props.location?.params
  if (!hasObjectLength(params?.data)) return <span>Error</span>
  const PdfComponent = pdfComponent[params.template]
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4">
          <PdfComponent {...params} />
        </Page>
      </Document>
    </PDFViewer>
  )
}

const styles = StyleSheet.create({
  viewer: {
    width: '100%',
    height: window.innerHeight * 0.9
  }
})
