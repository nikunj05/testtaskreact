import React from 'react'
import {InfoCard} from 'components'
import colors from 'colors'

export default props => {
  const {
    totalLeave,
    totalCasual,
    totalSick,
    casualLeave,
    sickLeave,
    takenLeave,
    remainLeave,
    remailCasual,
    remailSick
  } = props

  return (
    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
      <InfoCard
        title={`Remain Casual Leave ( from ${totalCasual} )`}
        value={remailCasual}
        color={colors.primary}
      />
      <InfoCard
        title={`Remain Sick Leave ( from ${totalSick} )`}
        value={remailSick}
        color={colors.primary}
      />
      <InfoCard
        title={`Remain Leave Balance ( from ${totalLeave} )`}
        value={remainLeave}
        color={colors.success}
      />
      <InfoCard
        title={`Taken Casual Leave ( from ${totalCasual} )`}
        value={casualLeave}
        color={colors.danger}
      />
      <InfoCard
        title={`Taken Sick Leave ( from ${totalSick} )`}
        value={sickLeave}
        color={colors.danger}
      />
      <InfoCard
        title={`Total Taken Leave ( from ${totalLeave} )`}
        value={takenLeave}
        color={colors.info}
      />
    </div>
  )
}
