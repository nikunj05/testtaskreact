import {DataTable} from 'components'
import React from 'react'

export default props => {
  const {milestones} = props
  return (
    <DataTable
      sortable={false}
      data={milestones}
      pickItems={['title', 'date', 'amount']}
    />
  )
}
