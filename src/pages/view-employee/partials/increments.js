import {DataTable} from 'components'
import React, {Fragment} from 'react'
import {formattedDate, hasLength} from 'utils'

export default props => {
  const {increments} = props
  if (!hasLength(increments)) return <Fragment />
  return (
    <DataTable
      hideAction
      data={increments.map(item => ({...item, date: formattedDate(item.date)}))}
      pickItems={['amount', 'percentage', 'date']}
    />
  )
}
