import * as types from './types'

const initialState = {
  employees: []
}

function employeeReducer(state = initialState, action) {
  const {payload, type} = action

  switch (type) {
    case types.FETCH_EMPLOYEES_SUCCESS:
      return {...state, employees: payload}

    default:
      return state
  }
}

export default employeeReducer
