import React from 'react'
import {Message} from 'primereact'
import {InfoCard} from 'components'
import {hasTextLength} from 'utils'

export default props => {
  const {
    is_exceed,
    formValues: {number_of_leaves},
    remainLeave,
    remailCasual,
    remailSick,
    totalLeave,
    totalCasual,
    totalSick
  } = props

  return (
    <>
      {hasTextLength(number_of_leaves) && !is_exceed && (
        <div className="mb-5 col-12 md:col-12">
          <Message
            severity="success"
            text="Taken leave(s) will be paid by the company"
          />
        </div>
      )}
      {hasTextLength(number_of_leaves) && is_exceed && (
        <div className="mb-5 col-12 md:col-12">
          <Message
            severity="error"
            text="Taken leave(s) will not paid by the company"
          />
        </div>
      )}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title={`Leave Balance (${totalLeave})`} value={remainLeave} />
        <InfoCard
          title={`Casual Leave (${totalCasual})`}
          value={remailCasual}
        />
        <InfoCard title={`Sick Leave (${totalSick})`} value={remailSick} />
      </div>
    </>
  )
}
