import React, {useContext, useState} from 'react'
import {SidebarContext} from 'context/SidebarContext'
import {
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon
} from 'icons'
import {
  Avatar,
  Dropdown,
  DropdownItem,
  WindmillContext
} from '@windmill/react-ui'
import {logoutSuccess} from 'stores/auth/actions'
import {connect} from 'react-redux'

const Header = props => {
  const {mode, toggleMode} = useContext(WindmillContext)
  const {toggleSidebar} = useContext(SidebarContext)

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }
  const logout = () => props.dispatch(logoutSuccess())
  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-end h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu">
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>

        <ul className="flex self-end items-center flex-shrink-0 space-x-6">
          <li className="relative">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={logout}
              aria-label="Account"
              aria-haspopup="true">
              <OutlineLogoutIcon className="w-4 h-4 mr-3" aria-hidden="true" />
              <span>Log out</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default connect()(Header)
