import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {handleError} from 'utils/error-message'
import * as req from './service'
import * as types from './types'

export function* fetchClients({payload = {}}) {
  try {
    const {onSuccess} = payload
    const {data} = yield call(req.fetchClients)
    yield put({type: types.FETCH_CLIENTS_SUCCESS, payload: data})
    onSuccess(data)
  } catch (e) {}
}

function* fetchSingleClient({payload = {}}) {
  const {id, onSuccess, spinner} = payload
  try {
    const {data} = yield call(req.fetchSingleClient, id)
    onSuccess(data)
  } catch (e) {
    handleError(e)
  } finally {
    spinner(false)
  }
}

function* addClient({payload = {}}) {
  const {files, params, onSuccess, spinner} = payload
  try {
    const {data} = yield call(req.addClient, params)
    if (files) yield call(req.addClientFile, data?._id, files)
    yield call(fetchClients, {payload: {onSuccess: () => {}}})
    onSuccess()
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}
function* updateClient({payload = {}}) {
  const {files, params, onSuccess, spinner} = payload
  try {
    const id = params._id
    yield call(req.updateClient, id, params)
    if (files) yield call(req.addClientFile, id, files)
    yield call(fetchClients, {payload: {onSuccess: () => {}}})
    onSuccess()
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}
function* deleteClient({payload = {}}) {
  const {id, spinner} = payload
  try {
    yield call(req.deleteClient, id)
    yield call(fetchClients, {payload: {onSuccess: () => {}}})
    yield delay(1000)
    yield spinner(false)
  } catch (e) {
    handleError(e)
  }
}

export default function* clientSaga() {
  yield takeLatest(types.FETCH_CLIENTS, fetchClients)
  yield takeLatest(types.FETCH_SINGLE_CLIENT, fetchSingleClient)
  yield takeEvery(types.ADD_CLIENT, addClient)
  yield takeEvery(types.UPDATE_CLIENT, updateClient)
  yield takeEvery(types.DELETE_CLIENT, deleteClient)
}
