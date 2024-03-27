import React from 'react'
import * as Icons from 'icons'

function Icon({icon, ...props}) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

const SidebarContent = ({isEmployee}) => {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        href="#">
        Calibr
      </a>
      <ul className="mt-6"></ul>
    </div>
  )
}

export default SidebarContent
