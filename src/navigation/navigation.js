import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {AccessibleNavigationAnnouncer} from './AccessibleNavigationAnnouncer'
import CommonNavigator from './navigators/common-navigator'
import {Layout} from 'components/layout'

export default props => {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Layout>{CommonNavigator()}</Layout>
        </Switch>
      </Router>
    </>
  )
}
