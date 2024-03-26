import {call, put, takeLatest} from 'redux-saga/effects'
import {fetchClients} from 'stores/client/saga'
import {fetchEmployees} from 'stores/employee/saga'
import {fetchProjects} from 'stores/project/saga'
import * as req from './service'
import * as types from './types'

function* fetchDashboard({payload = {}}) {
  try {
    const {onSuccess} = payload
    // const {data} = yield call(req.fetchDashboard)
    yield call(fetchClients, {payload: {onSuccess: () => {}}})
    yield call(fetchProjects, {payload: {onSuccess: () => {}}})
    yield call(fetchEmployees, {payload: {onSuccess: () => {}}})
    // yield put({type: types.FETCH_DASHBOARD_SUCCESS, payload: data})
    yield onSuccess()
  } catch (e) {}
}

export default function* dashboardSaga() {
  yield takeLatest(types.FETCH_DASHBOARD, fetchDashboard)
}
