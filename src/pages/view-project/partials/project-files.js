import {BaseButton, DataTable} from 'components'
import React from 'react'
import {fileExtension, fileUrl} from 'utils'

export default props => {
  const {project_files} = props
  const ActionComponent = (item, {rowIndex}) => {
    const openFile = () =>
      window.open(fileUrl(item), '_blank', 'noopener,noreferrer')
    return (
      <BaseButton
        key={rowIndex}
        onClick={openFile}
        label={fileExtension(item)}
        className="p-button-link"
      />
    )
  }
  return (
    <DataTable
      sortable={false}
      data={project_files}
      showIndex
      actionComponentTitle="File"
      actionComponent={ActionComponent}
    />
  )
}
