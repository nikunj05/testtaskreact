import {call, put, takeEvery} from 'redux-saga/effects'
import {saveIdToken} from './actions'
import * as req from './service'
import * as types from './types'
import {handleError} from 'utils/error-message'
import {showNotification} from 'utils'

function* login({payload}) {
  const {params, onSuccess, spinner} = payload
  try {
    const {data, token} = yield call(req.login, params)
    yield put(saveIdToken(token))
    yield put({type: types.SAVE_USER_DETAILS, payload: data})
    yield onSuccess(data)
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}

function* sentRecoverPasswordLink({payload}) {
  const {params, onSuccess, spinner} = payload
  try {
    const {data} = yield call(req.sentRecoverPasswordLink, params)
    yield onSuccess(data)
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}
function* resetPassword({payload}) {
  const {params, onSuccess, spinner} = payload
  try {
    const {data} = yield call(req.resetPassword, params)
    yield onSuccess(data)
    yield showNotification({
      title: 'Password Reset Successfully !',
      type: 'success'
    })
  } catch (e) {
    handleError(e)
  } finally {
    yield spinner(false)
  }
}

export default function* authSaga() {
  yield takeEvery(types.LOGIN, login)
  yield takeEvery(types.SENT_RECOVER_PASSWORD_LINK, sentRecoverPasswordLink)
  yield takeEvery(types.RESET_PASSWORD, resetPassword)
}
