import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import AppNavigation, {AccessibleNavigationAnnouncer} from 'navigation'
import {Toaster} from 'react-hot-toast'
import 'config/config-i18n'

function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <AppNavigation />
      </Router>
      <Toaster position="top-right" />
    </>
  )
}

export default App
