import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {AccessibleNavigationAnnouncer} from './AccessibleNavigationAnnouncer'
import authNavigator from './navigators/auth-navigator'

export default props => {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>{authNavigator()} </Switch>
      </Router>
    </>
  )
}
