import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {hasValue} from 'utils'
import {handleError} from 'utils/error-message'
import * as req from './service'
import * as types from './types'

function* fetchLeaves({payload = {}}) {
  try {
    const {id, onSuccess = () => {}} = payload
    const {data} = yield call(req.fetchLeaves, id)
    yield put({type: types.FETCH_LEAVES_SUCCESS, payload: data})
    onSuccess(data)
  } catch (e) {
    handleError(e)
  }
}

function* fetchSingleLeave({payload = {}}) {
  const {id, onSuccess, spinner} = payload
  try {
    const {data} = yield call(req.fetchSingleLeave, id)
    onSuccess(data)
  } catch (e) {
    handleError(e)
  } finally {
    spinner(false)
  }
}

function* acceptLeave({payload = {}}) {
  const {id, employeeId, onSuccess = () => {}, spinner} = payload
  try {
    yield call(req.acceptLeave, id)
    if (hasValue(employeeId))
      yield call(fetchLeaves, {payload: {id: employeeId, onSuccess: () => {}}})
    yield delay(1000)
    yield onSuccess()
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}

function* rejectLeave({payload = {}}) {
  const {id, employeeId, onSuccess = () => {}, spinner} = payload
  try {
    yield call(req.rejectLeave, id)
    yield call(fetchLeaves, {payload: {id: employeeId, onSuccess: () => {}}})
    yield delay(1000)
    yield onSuccess()
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}

function* createLeave({payload = {}}) {
  const {params, onSuccess, spinner} = payload
  try {
    const {data} = yield call(req.createLeave, params)
    yield onSuccess(data)
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}

export default function* leaveSaga() {
  yield takeLatest(types.FETCH_LEAVES, fetchLeaves)
  yield takeLatest(types.FETCH_SINGLE_LEAVE, fetchSingleLeave)
  yield takeLatest(types.ACCEPT_LEAVE, acceptLeave)
  yield takeLatest(types.REJECT_LEAVE, rejectLeave)
  yield takeEvery(types.CREATE_LEAVE, createLeave)
}
