import React, {useContext, Suspense, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {Sidebar, Header, ThemedSuspense, Footer} from 'components'
import {SidebarContext} from 'context/SidebarContext'

export const Layout = props => {
  const {isSidebarOpen, closeSidebar} = useContext(SidebarContext)
  let location = useLocation()

  useEffect(() => {
    closeSidebar()
  }, [location])

  return (
    <div className="flex h-screen flex-col justify-between">
      <div
        className={`flex flex-1 bg-gray-50 dark:bg-gray-900 ${
          isSidebarOpen && 'overflow-hidden'
        }`}>
        <Sidebar />
        <div className="flex flex-col flex-1 w-full">
          <Header />
          <main className="h-full overflow-y-auto">
            <div className="container grid px-6 mx-auto">
              <Suspense fallback={<ThemedSuspense />} {...props} />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
