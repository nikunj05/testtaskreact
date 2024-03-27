import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import ForgotPassword from 'pages/auth/forgot-password'
import paths from 'navigation/navigation-routes'
import Login from 'pages/auth/login'
import LeaveAction from 'pages/leave-action'
import ResetPassword from 'pages/auth/reset-password'

export default () => {
  return (
    <>
      <Route path={paths.DEFAULT} component={Login} />
      <Redirect exact from={paths.DEFAULT} to={paths.DEFAULT} />
    </>
  )
}
