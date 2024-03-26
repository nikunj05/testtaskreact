import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {handleError} from 'utils/error-message'
import * as req from './service'
import * as types from './types'

function* fetchProjectTypes({payload = {}}) {
  try {
    const {onSuccess} = payload
    const {data} = yield call(req.fetchProjectTypes)
    yield put({type: types.FETCH_PROJECT_TYPES_SUCCESS, payload: data})
    onSuccess(data)
  } catch (e) {}
}

function* addProjectType({payload = {}}) {
  const {params, callBack, spinner} = payload
  try {
    yield call(req.addProjectType, params)
    yield call(fetchProjectTypes, {payload: {onSuccess: () => {}}})
    yield callBack()
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}

function* updateProjectType({payload = {}}) {
  const {params, callBack, spinner} = payload
  try {
    yield call(req.updateProjectType, params._id, params)
    yield call(fetchProjectTypes, {payload: {onSuccess: () => {}}})
    yield callBack()
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}

function* deleteProjectType({payload = {}}) {
  const {id, spinner} = payload
  try {
    yield call(req.deleteProjectType, id)
    yield call(fetchProjectTypes, {payload: {onSuccess: () => {}}})
    yield delay(500)
    yield spinner(false)
  } catch (e) {
    handleError(e)
  }
}

export default function* projectTypeSaga() {
  yield takeLatest(types.FETCH_PROJECT_TYPES, fetchProjectTypes)
  yield takeEvery(types.ADD_PROJECT_TYPE, addProjectType)
  yield takeEvery(types.UPDATE_PROJECT_TYPE, updateProjectType)
  yield takeEvery(types.DELETE_PROJECT_TYPE, deleteProjectType)
}
