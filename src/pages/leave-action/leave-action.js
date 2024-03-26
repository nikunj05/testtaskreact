import React from 'react'
import {Title} from 'components'
import RejectModal from './partials/reject-modal'
import LeaveDetails from './partials/leave-details'
import AcceptModal from './partials/accept-modal'

export default props => {
  const {leaveData, acceptRequest, rejectRequest} = props
  return (
    <>
      <Title title={'Employee Leave Details'} hideButton />
      <RejectModal rejectRequest={rejectRequest} />
      <AcceptModal acceptRequest={acceptRequest} />
      <LeaveDetails leaveData={leaveData} />
    </>
  )
}
