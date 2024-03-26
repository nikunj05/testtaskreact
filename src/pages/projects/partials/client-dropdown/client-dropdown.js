import React from 'react'
import {Dropdown, DropdownItem} from '@windmill/react-ui'
import {DropdownIcon} from 'icons'
import {fileUrl} from 'utils'
import DefaultImage from 'assets/img/default.jpeg'

export default props => {
  const {clients, formValues, setFormField, isOpen, setIsOpen} = props
  const toggleDropdown = () => setIsOpen(!isOpen)
  const onClick = data => {
    setFormField('client', data)
    toggleDropdown()
  }
  const ClientItem = (item, i) => (
    <DropdownItem
      onClick={() => onClick(item)}
      key={i}
      tag="a"
      href="#"
      className="justify-between">
      <div className="flex items-center text-sm">
        <img
          className="hidden mr-3 md:block h-16 w-16 rounded-full object-contain"
          src={fileUrl(item.client_profile_image)}
          onError={({currentTarget}) => {
            currentTarget.onerror = null
            currentTarget.src = DefaultImage
          }}
          alt="Client avatar"
        />
        <span>{item.client_name}</span>
      </div>
    </DropdownItem>
  )

  const title = formValues?.client?.client_name ?? 'Select Client'
  return (
    <div className="relative mt-1 mb-2">
      <span>Client : </span>
      <button
        onClick={toggleDropdown}
        className="py-1 px-2 flex-row flex w-full border items-center justify-between border-gray-200 rounded-md">
        {title} <DropdownIcon className="w-8 h-8" />
      </button>
      <Dropdown
        className="overflow-y-scroll max-h-40 bg-white z-10"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}>
        {clients.map(ClientItem)}
      </Dropdown>
    </div>
  )
}
