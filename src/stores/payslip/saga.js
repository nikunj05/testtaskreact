import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {handleError} from 'utils/error-message'
import * as req from './service'
import * as types from './types'

function* fetchPayslips({payload = {}}) {
  try {
    const {id, onSuccess = () => {}} = payload
    const {data} = yield call(req.fetchPayslips, id)
    yield put({type: types.FETCH_PAYSLIPS_SUCCESS, payload: data})
    onSuccess(data)
  } catch (e) {
    handleError(e)
  }
}

function* createPayslip({payload = {}}) {
  const {params, onSuccess, spinner} = payload
  try {
    const {data} = yield call(req.createPayslip, params)
    yield onSuccess(data)
  } catch (e) {
    handleError(e)
  } finally {
    spinner(false)
  }
}

function* deletePayslip({payload = {}}) {
  try {
    const {id, employeeId, spinner} = payload
    yield call(req.deletePayslip, id)
    yield call(fetchPayslips, {payload: {id: employeeId, onSuccess: () => {}}})
    yield delay(1000)
    yield spinner(false)
  } catch (e) {
    handleError(e)
  }
}

export default function* payslipSaga() {
  yield takeLatest(types.FETCH_PAYSLIPS, fetchPayslips)
  yield takeEvery(types.CREATE_PAYSLIP, createPayslip)
  yield takeEvery(types.DELETE_PAYSLIP, deletePayslip)
}
