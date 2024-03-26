import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import client from './client/reducer'
import project from './project/reducer'
import projectType from './project-type/reducer'
import employee from './employee/reducer'
import auth from './auth/reducer'
import invoice from './invoice/reducer'
import payslip from './payslip/reducer'
import leave from './leave/reducer'
import dashboard from './dashboard/reducer'

export default combineReducers({
  form,
  auth,
  client,
  employee,
  project,
  projectType,
  invoice,
  payslip,
  leave,
  dashboard
})
