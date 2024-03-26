import * as types from './types'

const initialState = {
  clients: []
}

function clientReducer(state = initialState, action) {
  const {payload, type} = action

  switch (type) {
    case types.FETCH_CLIENTS_SUCCESS:
      return {...state, clients: payload}

    default:
      return state
  }
}

export default clientReducer
