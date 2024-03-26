import * as types from './types'

const initialState = {
  idToken: null,
  isLogin: false,
  isGuest: true,
  user: null,
  loading: {}
}

function authReducer(state = initialState, action) {
  const {payload, type} = action

  switch (type) {
    case types.LOGOUT_SUCCESS:
      return {...state, isLogin: false, isGuest: true, idToken: null}

    case types.SAVE_ID_TOKEN:
      return {...state, idToken: payload, isLogin: true, isGuest: false}

    case types.SAVE_USER_DETAILS:
      return {...state, user: payload, isGuest: false}

    default:
      return state
  }
}

export default authReducer
