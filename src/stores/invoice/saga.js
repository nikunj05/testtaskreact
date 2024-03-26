import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {handleError} from 'utils/error-message'
import * as req from './service'
import * as types from './types'

function* fetchInvoices({payload = {}}) {
  try {
    const {data} = yield call(req.fetchInvoices)
    yield put({type: types.FETCH_INVOICES_SUCCESS, payload: data})
  } catch (e) {
    handleError(e)
  }
}

function* fetchProjectInvoices({payload = {}}) {
  const {id, onSuccess} = payload
  try {
    const {data} = yield call(req.fetchProjectInvoices, id)
    onSuccess(data)
  } catch (e) {
    handleError(e)
  }
}
function* fetchSingleInvoice({payload = {}}) {
  const {id, onSuccess, spinner} = payload
  try {
    const {data} = yield call(req.fetchSingleInvoice, id)
    onSuccess(data)
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}

function* addInvoice({payload = {}}) {
  const {params, onSuccess, spinner} = payload
  try {
    const {data} = yield call(req.addInvoice, params)
    yield onSuccess(data)
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}

function* updateInvoice({payload = {}}) {
  const {params, onSuccess, spinner} = payload
  try {
    yield call(req.updateInvoice, params._id, params)
    yield onSuccess()
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}

function* deleteInvoice({payload = {}}) {
  const {id} = payload
  try {
    yield call(req.deleteInvoice, id)
    yield call(fetchInvoices, {payload: null})
  } catch (e) {
    handleError(e)
  }
}

export default function* invoiceSaga() {
  yield takeLatest(types.FETCH_INVOICES, fetchInvoices)
  yield takeLatest(types.FETCH_PROJECT_INVOICES, fetchProjectInvoices)
  yield takeLatest(types.FETCH_SINGLE_INVOICE, fetchSingleInvoice)
  yield takeEvery(types.ADD_INVOICE, addInvoice)
  yield takeEvery(types.UPDATE_INVOICE, updateInvoice)
  yield takeEvery(types.DELETE_INVOICE, deleteInvoice)
}
