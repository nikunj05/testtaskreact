import Request from 'utils/request'

export const login = data => Request.post('auth/login', data)

export const sentRecoverPasswordLink = data =>
  Request.post('auth/request-password-reset', data)

export const resetPassword = data => Request.post('auth/reset-password', data)
