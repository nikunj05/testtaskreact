import * as types from './types'

export const login = (params, onSuccess, spinner) => ({
  type: types.LOGIN,
  payload: {params, onSuccess, spinner}
})

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
  payload: null
})

export const sentRecoverPasswordLink = (params, onSuccess, spinner) => ({
  type: types.SENT_RECOVER_PASSWORD_LINK,
  payload: {params, onSuccess, spinner}
})

export const resetPassword = (params, onSuccess, spinner) => ({
  type: types.RESET_PASSWORD,
  payload: {params, onSuccess, spinner}
})

export const saveIdToken = token => ({
  type: types.SAVE_ID_TOKEN,
  payload: token
})
