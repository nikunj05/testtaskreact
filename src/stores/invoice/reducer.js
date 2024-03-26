import * as types from './types'

const initialState = {
  invoices: []
}

function invoiceReducer(state = initialState, action) {
  const {payload, type} = action

  switch (type) {
    case types.FETCH_INVOICES_SUCCESS:
      return {...state, invoices: payload}

    default:
      return state
  }
}

export default invoiceReducer
