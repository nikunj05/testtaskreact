import React, {Fragment, useRef, useState} from 'react'
import {Column, DataTable, InputText} from 'primereact'
import {EmptyIcon} from 'icons'
import {IProps} from './type.d'
import {map} from 'lodash'
import DefaultImage from 'assets/img/default.jpeg'
import {fileUrl, hasLength, makeTitleCase} from 'utils'
import {BaseButton, Loader} from 'components'

export default (props: IProps) => {
  const ref = useRef(null)
  const [globalFilter, setGlobalFilter] = useState(null)
  const {
    show = 'true',
    avatar,
    data,
    loading,
    actionLoader = false,
    otherActions,
    showIndex = false,
    hideAction = false,
    actionOnStart = false,
    sortable = true,
    pickItems,
    onEdit,
    onDelete,
    onRowClick,
    onView,
    actionComponent,
    actionComponentTitle
  } = props
  if (!show) return <Fragment />
  if (loading) return <Loader />
  if (!hasLength(data))
    return (
      <div className="width-100% flex justify-center">
        <EmptyIcon className="max-w-xl" />
      </div>
    )
  const exportCSV = () => ref.current.exportCSV()

  const actionBodyTemplate = data => {
    if (hasLength(otherActions) || onEdit || onDelete || onView) {
      return (
        <div className="items-center flex justify-evenly">
          {onView && (
            <BaseButton
              icon="pi pi-eye"
              className="p-button-rounded p-button-secondary p-button-text p-button-lg"
              aria-label="View"
              onClick={() => onView(data)}
            />
          )}
          {onEdit && (
            <BaseButton
              icon="pi pi-pencil"
              className="p-button-rounded p-button-info p-button-text p-button"
              aria-label="Edit"
              onClick={() => onEdit(data)}
            />
          )}
          {onDelete && (
            <BaseButton
              icon="pi pi-trash"
              className="p-button-rounded p-button-danger p-button-text p-button-lg"
              aria-label="Delete"
              onClick={() => onDelete(data)}
            />
          )}
          {hasLength(otherActions) &&
            otherActions.map((Action, i) => <Action key={i} data={data} />)}
        </div>
      )
    }
  }

  const header = (
    <div className="items-center flex-row flex flex-1 justify-between">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={e => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
      <BaseButton label="Export As CSV" onClick={exportCSV} />
    </div>
  )

  const dataTableProps = {
    header,
    onRowClick,
    globalFilter,
    stripedRows: true,
    paginator: true,
    responsiveLayout: 'stack',
    breakpoint: '960px',
    dataKey: '_id',
    rows: 10,
    rowsPerPageOptions: [5, 10, 25],
    paginatorTemplate:
      'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown',
    currentPageReportTemplate:
      'Showing {first} to {last} of {totalRecords} products'
  }

  const IndexView = () => {
    if (!showIndex) return <Fragment />
    const Index = (item, {rowIndex}) => (
      <span key={rowIndex}>{rowIndex + 1}</span>
    )
    return <Column body={Index} header={'No.'} />
  }

  const AvatarView = () => {
    if (!avatar) return <Fragment />
    const AvatarImage = item => (
      <img
        className="hidden mr-3 md:block h-16 w-16 rounded-full object-contain"
        src={fileUrl(item[avatar])}
        onError={({currentTarget}) => {
          currentTarget.onerror = null
          currentTarget.src = DefaultImage
        }}
        alt="Avatar"
      />
    )
    return <Column field={avatar} body={AvatarImage} header={'Image'} />
  }

  const ActionView = (show = false) =>
    !hideAction &&
    show && (
      <Column header="Action" body={actionBodyTemplate} exportable={false} />
    )

  const Items = () =>
    map(pickItems, (item, i) => (
      <Column
        key={i}
        field={item}
        header={makeTitleCase(item)}
        sortable={sortable}
      />
    ))

  return (
    <div className="card">
      <DataTable
        bodyStyle={{backgroundColor: 'red'}}
        ref={ref}
        value={data}
        {...dataTableProps}>
        {ActionView(actionOnStart)}
        {IndexView()}
        {AvatarView()}
        {Items()}
        {ActionView(!actionOnStart)}
        {actionComponent && (
          <Column
            header={actionComponentTitle}
            body={actionComponent}
            exportable={false}
          />
        )}
      </DataTable>
      <Loader isOverlay visible={actionLoader} />
    </div>
  )
}
