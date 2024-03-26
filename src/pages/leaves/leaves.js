import React, {Fragment} from 'react'
import {ButtonView, DataTable, Title} from 'components'
import paths from 'navigation/navigation-routes'
import {union} from 'lodash'
import LeavesData from './partials/leaves-data'
import {TrashIcon} from 'icons'

export default props => {
  const {
    leaves = [],
    fetchInitialData,
    leaveData,
    isAdmin,
    rejectRequest,
    actionLoader,
    history
  } = props
  let pickItems = ['leave_date', 'status', 'type', 'reason']
  if (isAdmin) union(pickItems, ['employee_name', 'designation'])
  const addNew = () => history.push(paths.CREATE_LEAVE)
  const RejectLeave = ({data}) => {
    if (data.status !== 'pending') return <Fragment />
    return (
      <ButtonView onClick={() => rejectRequest(data._id)} aria-label="Edit">
        <TrashIcon className="w-6 h-6" aria-hidden="true" />
      </ButtonView>
    )
  }
  return (
    <>
      {!isAdmin && (
        <Title
          title={'Leaves'}
          onClick={addNew}
          buttonLabel="+ Add new leave"
          headerElement={<LeavesData {...leaveData} />}
        />
      )}
      <DataTable
        actionLoader={actionLoader}
        loading={fetchInitialData}
        otherActions={[RejectLeave]}
        showIndex
        data={leaves}
        pickItems={pickItems}
      />
    </>
  )
}
