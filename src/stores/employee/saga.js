import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {showNotification} from 'utils'
import {handleError} from 'utils/error-message'
import * as req from './service'
import * as types from './types'

export function* fetchEmployees({payload = {}}) {
  try {
    const {onSuccess} = payload
    const {data} = yield call(req.fetchEmployees)
    yield put({type: types.FETCH_EMPLOYEES_SUCCESS, payload: data})
    onSuccess(data)
  } catch (e) {}
}

function* fetchSingleEmployee({payload = {}}) {
  const {id, onSuccess, spinner} = payload
  try {
    const {data} = yield call(req.fetchSingleEmployee, id)
    onSuccess(data)
  } catch (e) {
    handleError(e)
  } finally {
    spinner(false)
  }
}

function* addEmployee({payload = {}}) {
  const {files, params, onSuccess, spinner} = payload
  try {
    const {data} = yield call(req.addEmployee, params)
    if (files) yield call(req.addEmployeeFile, data?._id, files)
    yield call(fetchEmployees, {payload: {onSuccess: () => {}}})
    onSuccess()
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}
function* updateEmployee({payload = {}}) {
  const {files, params, onSuccess, spinner} = payload
  try {
    yield call(req.updateEmployee, params._id, params)
    if (files) yield call(req.addEmployeeFile, params._id, files)
    yield call(fetchEmployees, {payload: {onSuccess: () => {}}})
    onSuccess()
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}

function* deleteEmployee({payload = {}}) {
  const {id, spinner} = payload
  try {
    yield call(req.deleteEmployee, id)
    yield call(fetchEmployees, {payload: {onSuccess: () => {}}})
    yield delay(1000)
    yield spinner(false)
  } catch (e) {
    handleError(e)
  }
}

function* changeEmployeePassword({payload = {}}) {
  const {params, onSuccess, spinner} = payload
  try {
    yield call(req.changeEmployeePassword, params)
    showNotification({
      title: 'Password Updated Successfully !',
      type: 'success'
    })
    onSuccess()
  } catch (e) {
    handleError(e)
  } finally {
    spinner()
  }
}

export default function* employeeSaga() {
  yield takeLatest(types.FETCH_EMPLOYEES, fetchEmployees)
  yield takeLatest(types.FETCH_SINGLE_EMPLOYEE, fetchSingleEmployee)
  yield takeEvery(types.ADD_EMPLOYEE, addEmployee)
  yield takeEvery(types.UPDATE_EMPLOYEE, updateEmployee)
  yield takeEvery(types.DELETE_EMPLOYEE, deleteEmployee)
  yield takeEvery(types.CHANGE_EMPLOYEE_PASSWORD, changeEmployeePassword)
}
