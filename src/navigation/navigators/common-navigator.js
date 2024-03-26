import React from 'react'
import paths from 'navigation/navigation-routes'
import Dashboard from 'pages/dashboard'
import {Switch, Route, Redirect} from 'react-router-dom'
import NotFound from 'pages/404-not-found'

const commonRoutes = [
  {path: paths.DEFAULT, component: Dashboard},
  {path: paths.CREATE_LEARNING_PATH, component: Dashboard}
]
export default () => {
  return (
    <Switch>
      {commonRoutes.map(RouteItem)}
      <Redirect exact from={paths.DEFAULT} to={paths.DEFAULT} />
      <Route component={NotFound} />
    </Switch>
  )
}

const RouteItem = (route, i) => (
  <Route
    key={i}
    exact={true}
    path={`${route.path}`}
    render={props => <route.component {...props} />}
  />
)
