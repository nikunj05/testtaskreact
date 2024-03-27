import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import paths from 'navigation/navigation-routes'
import CreatePath from 'pages/create-path'

export default () => {
  return (
    <>
      <Route path={paths.DEFAULT} component={CreatePath} />
      <Redirect exact from={paths.DEFAULT} to={paths.DEFAULT} />
    </>
  )
}
