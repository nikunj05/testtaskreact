import React from 'react'
import {MultiSelect} from 'primereact'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import {BaseLabel} from 'components'

export default props => {
  const {employees, employeeList, setEmployees} = props

  const item = option => (
    <div className="country-item">
      <div>{option.employee_name}</div>
    </div>
  )

  const selectedItem = option => {
    if (!option) return 'Select Employee'
    return (
      <span className="country-item country-item-value mx-1 bg-purple-500 text-white rounded-md px-1 py-1">
        <span>{option.employee_name}</span>
      </span>
    )
  }

  const footer = () => {
    const length = employees ? employees.length : 0
    return (
      <div className="py-2 px-3">
        <b>{length}</b> item{length > 1 ? 's' : ''} selected.
      </div>
    )
  }

  return (
    <>
      <BaseLabel label="Employee" isRequired />
      <MultiSelect
        value={employees}
        options={employeeList}
        onChange={e => setEmployees(e.value)}
        optionLabel="name"
        placeholder="Select Countries"
        filter
        className="flex my-2 w-full flex-row overflow-y-visible border-gray-50 border"
        itemTemplate={item}
        selectedItemTemplate={selectedItem}
        panelFooterTemplate={footer}
      />
    </>
  )
}
