import React from 'react'
import {DataTable, Title} from 'components'
import paths from 'navigation/navigation-routes'
import {pdfTemplates} from 'stores/common/helpers'
import {union} from 'lodash'

export default props => {
  const {payslips = [], isAdmin, fetchInitialData, history} = props
  const onView = data =>
    history.push({
      pathname: paths.PDF_VIEW,
      params: {data, template: pdfTemplates.payslip}
    })

  let pickItems = ['payslip', 'amount']
  if (isAdmin) union(pickItems, ['employee_name', 'designation'])

  return (
    <>
      <Title title={'Payslips'} hideButton />
      <DataTable
        loading={fetchInitialData}
        data={payslips}
        onView={onView}
        pickItems={pickItems}
      />
    </>
  )
}
