import * as types from './types'

const initialState = {employees: 0, clients: 0, projects: 0}

function dashboardReducer(state = initialState, action) {
  const {payload, type} = action

  switch (type) {
    case types.FETCH_DASHBOARD_SUCCESS:
      return {...state, ...payload}

    default:
      return state
  }
}

export default dashboardReducer
