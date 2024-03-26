import {all} from 'redux-saga/effects'
import client from './client/saga'
import employee from './employee/saga'
import project from './project/saga'
import projectType from './project-type/saga'
import auth from './auth/saga'
import invoice from './invoice/saga'
import payslip from './payslip/saga'
import leave from './leave/saga'
import dashboard from './dashboard/saga'

export default function* rootSaga() {
  yield all([
    auth(),
    client(),
    project(),
    employee(),
    projectType(),
    invoice(),
    payslip(),
    leave(),
    dashboard()
  ])
}
