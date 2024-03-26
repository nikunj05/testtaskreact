import * as types from './types'

const initialState = {
  leaves: [],
  leaveData: {
    totalCasual: 12,
    totalSick: 6
  }
}

function leaveReducer(state = initialState, action) {
  const {payload, type} = action

  switch (type) {
    case types.FETCH_LEAVES_SUCCESS:
      return {...state, leaves: payload}

    default:
      return state
  }
}

export default leaveReducer
