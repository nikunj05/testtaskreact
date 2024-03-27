import React from 'react'
import paths from 'navigation/navigation-routes'
import Dashboard from 'pages/dashboard'
import Clients from 'pages/clients'
import ProjectTypes from 'pages/project-types'
import CreateProject from 'pages/create-project'
import Projects from 'pages/projects'
import {Switch, Route, Redirect} from 'react-router-dom'
import NotFound from 'pages/404-not-found'
import CreateClient from 'pages/create-client'
import Employees from 'pages/employees'
import CreateEmployee from 'pages/create-employee'
import CreateInvoice from 'pages/create-invoice'
import ViewProject from 'pages/view-project'
import PDFview from 'pages/pdf-view'
import EmployeeChangePassword from 'pages/employee-change-password'
import CreatePayslip from 'pages/create-payslip'
import Payslips from 'pages/payslips'
import Leaves from 'pages/leaves'
import CreateLeave from 'pages/create-leave'
import ViewEmployee from 'pages/view-employee'
import LeaveAction from 'pages/leave-action'
import ResetPassword from 'pages/auth/reset-password'

const adminRoutes = [
  {path: paths.RESET_PASSWORD, component: ResetPassword},
  {path: paths.CLIENTS, component: Clients},
  {path: paths.PROJECTS, component: Projects},
  {path: paths.EMPLOYEES, component: Employees},
  {path: paths.PROJECT_TYPES, component: ProjectTypes},
  {path: paths.ADD_PROJECT, component: CreateProject},
  {path: paths.EDIT_PROJECT, component: CreateProject},
  {path: paths.ADD_CLIENT, component: CreateClient},
  {path: paths.EDIT_CLIENT, component: CreateClient},
  {path: paths.ADD_EMPLOYEE, component: CreateEmployee},
  {path: paths.CREATE_INVOICE, component: CreateInvoice},
  {path: paths.CREATE_PAYSLIP, component: CreatePayslip},
  {path: paths.EDIT_EMPLOYEE, component: CreateEmployee},
  {path: paths.VIEW_PROJECT, component: ViewProject},
  {path: paths.VIEW_EMPLOYEE, component: ViewEmployee},
  {path: paths.LEAVE_REQUEST_ACTION, component: LeaveAction}
]

const employeeRoutes = [
  {path: paths.EMPLOYEE_CHANGE_PASSWORD, component: EmployeeChangePassword},
  {path: paths.EMPLOYEE_LEAVES, component: Leaves},
  {path: paths.CREATE_LEAVE, component: CreateLeave}
]

const commonRoutes = [
  {path: paths.DEFAULT, component: Dashboard},
  {path: paths.DASHBOARD, component: Dashboard},
  {path: paths.PDF_VIEW, component: PDFview},
  {path: paths.NOT_FOUND, component: NotFound},
  {path: paths.PAYSLIPS, component: Payslips}
]
export default ({isEmployee}) => {
  const ROUTES = isEmployee ? employeeRoutes : adminRoutes

  return (
    <Switch>
      {ROUTES.map(RouteItem)}
      {commonRoutes.map(RouteItem)}
      <Redirect exact from={paths.LOGIN} to={paths.DEFAULT} />
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
