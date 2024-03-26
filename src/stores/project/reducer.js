import * as types from './types'

const initialState = {
  projects: []
}

function projectReducer(state = initialState, action) {
  const {payload, type} = action

  switch (type) {
    case types.FETCH_PROJECTS_SUCCESS:
      return {...state, projects: payload}

    default:
      return state
  }
}

export default projectReducer
