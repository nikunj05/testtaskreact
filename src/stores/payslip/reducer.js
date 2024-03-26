import * as types from './types'

const initialState = {payslips: []}

function payslipReducer(state = initialState, action) {
  const {payload, type} = action

  switch (type) {
    case types.FETCH_PAYSLIPS_SUCCESS:
      return {...state, payslips: payload}

    default:
      return state
  }
}

export default payslipReducer
