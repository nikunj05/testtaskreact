import {ViewData} from 'components'
import React from 'react'
import {formattedAddress, fileUrl} from 'utils'
import {Avatar} from '@windmill/react-ui'

export default props => {
  const {client} = props
  const {
    address,
    address: {country},
    _id,
    company_name,
    email,
    phone,
    client_name,
    designation,
    client_profile_image,
    created
  } = client
  return (
    <div class="w-full">
      <div class="mb-10 w-full flex items-center justify-center">
        <Avatar
          className="block w-32 h-32 self-center"
          src={fileUrl(client_profile_image)}
          alt="Client avatar"
        />
      </div>
      <div class="grid gap-4 my-5 md:grid-cols-1 lg:grid-cols-2">
        <ViewData label="Client ID" value={_id} />
        <ViewData label="Client Name" value={client_name} />
        <ViewData label="Contact No." value={phone} />
        <ViewData label="Email Address" value={email} />
        <ViewData label="Designation" value={designation} />
        <ViewData label="Company Name" value={company_name} />
        <ViewData label="Created At" value={created} />
        <ViewData label="Country" value={country.name} />
        <ViewData label="Billing Address" value={formattedAddress(address)} />
      </div>
    </div>
  )
}
