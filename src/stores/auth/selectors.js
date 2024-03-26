const authStore = state => state?.auth

export const userDetailsSelector = state => authStore(state)?.user
export const userRoleSelector = state => {
  const role = authStore(state)?.user?.role
  const isAdmin = role === 'admin'
  const isEmployee = !isAdmin
  return {role, isAdmin, isEmployee}
}
export const authTokenSelector = state => authStore(state)?.idToken

export const checkUserIsLoginSelector = state =>
  authStore(state)?.isLogin ?? false
