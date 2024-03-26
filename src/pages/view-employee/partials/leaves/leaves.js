import React, {Fragment} from 'react'
import {ButtonView, DataTable} from 'components'
import {Button} from '@windmill/react-ui'
import {AcceptIcon, RejectIcon} from 'icons'

export default props => {
  const {
    leaves = [],
    acceptLeave,
    rejectLeave,
    fetchInitialData,
    actionLoader
  } = props
  const AcceptLeave = ({data}) => {
    if (data.status !== 'pending') return <Fragment />
    return (
      <ButtonView
        onClick={() => acceptLeave(data._id)}
        layout="link"
        size="icon"
        aria-label="Edit">
        <AcceptIcon className="w-6 h-6" />
      </ButtonView>
    )
  }
  const RejectLeave = ({data}) => {
    if (data.status !== 'pending') return <Fragment />
    return (
      <ButtonView
        onClick={() => rejectLeave(data._id)}
        layout="link"
        size="icon"
        aria-label="Edit">
        <RejectIcon className="w-6 h-6" aria-hidden="true" />
      </ButtonView>
    )
  }

  return (
    <>
      <DataTable
        actionLoader={actionLoader}
        loading={fetchInitialData}
        data={leaves}
        otherActions={[AcceptLeave, RejectLeave]}
        pickItems={[
          'leaves',
          'leave_date',
          'reason',
          'status',
          'is_exceed',
          'created_at'
        ]}
      />
    </>
  )
}
