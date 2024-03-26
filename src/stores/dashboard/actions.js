import * as types from './types'

export const fetchDashboard = (onSuccess = () => {}) => ({
  type: types.FETCH_DASHBOARD,
  payload: {onSuccess}
})
