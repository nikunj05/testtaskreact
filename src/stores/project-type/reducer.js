import * as types from './types'

const initialState = {
  projectTypes: []
}

function projectTypeReducer(state = initialState, action) {
  const {payload, type} = action

  switch (type) {
    case types.FETCH_PROJECT_TYPES_SUCCESS:
      return {...state, projectTypes: payload}

    default:
      return state
  }
}

export default projectTypeReducer
