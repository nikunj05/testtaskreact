import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {handleError} from 'utils/error-message'
import * as req from './service'
import * as types from './types'

export function* fetchProjects({payload = {}}) {
  try {
    const {onSuccess} = payload
    const {data} = yield call(req.fetchProjects)
    yield put({type: types.FETCH_PROJECTS_SUCCESS, payload: data})
    onSuccess(data)
  } catch (e) {
    handleError(e)
  }
}

function* fetchSingleProject({payload = {}}) {
  const {id, onSuccess, spinner} = payload
  try {
    const {data} = yield call(req.fetchSingleProject, id)
    onSuccess(data)
  } catch (e) {
    handleError(e)
  } finally {
    spinner(false)
  }
}

function* addProject({payload = {}}) {
  const {files, params, onSuccess, spinner} = payload
  try {
    const {data} = yield call(req.addProject, params)
    if (files) yield call(req.addProjectFile, data?._id, files)
    yield call(fetchProjects, {payload: {onSuccess: () => {}}})
    yield onSuccess()
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}

function* updateProject({payload = {}}) {
  const {files, params, onSuccess, spinner} = payload
  try {
    yield call(req.updateProject, params._id, params)
    if (files) yield call(req.addProjectFile, params?._id, files)
    yield call(fetchProjects, {payload: {onSuccess: () => {}}})
    yield onSuccess()
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}

function* deleteProject({payload = {}}) {
  const {id, spinner} = payload
  try {
    yield call(req.deleteProject, id)
    yield call(fetchProjects, {payload: {onSuccess: () => {}}})
    yield delay(1000)
    yield spinner(false)
  } catch (e) {
    handleError(e)
  }
}

export default function* projectSaga() {
  yield takeLatest(types.FETCH_PROJECTS, fetchProjects)
  yield takeLatest(types.FETCH_SINGLE_PROJECT, fetchSingleProject)
  yield takeEvery(types.ADD_PROJECT, addProject)
  yield takeEvery(types.UPDATE_PROJECT, updateProject)
  yield takeEvery(types.DELETE_PROJECT, deleteProject)
}
