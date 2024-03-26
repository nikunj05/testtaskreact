import React from 'react'
import {Dropdown, DropdownItem} from '@windmill/react-ui'
import {DropdownIcon} from 'icons'

export default props => {
  const {projectTypes, formValues, setFormField, isOpen, setIsOpen} = props
  const toggleDropdown = () => setIsOpen(!isOpen)
  const onClick = data => {
    setFormField('project_type', data)
    toggleDropdown()
  }
  const ProjectTypeItem = (item, i) => (
    <DropdownItem
      onClick={() => onClick(item)}
      key={i}
      tag="a"
      href="#"
      className="justify-between">
      <div className="flex items-center text-sm">
        <span>{item.name}</span>
      </div>
    </DropdownItem>
  )

  const title = formValues?.project_type?.name ?? 'Select Project Category'
  return (
    <div className="relative mt-1 mb-2">
      <span>Project Category : </span>
      <button
        onClick={toggleDropdown}
        className="py-1 px-2 flex-row flex w-full border items-center justify-between border-gray-200 rounded-md">
        {title} <DropdownIcon className="w-8 h-8" />
      </button>
      <Dropdown
        className="overflow-y-scroll max-h-40"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}>
        {projectTypes.map(ProjectTypeItem)}
      </Dropdown>
    </div>
  )
}
