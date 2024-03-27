import {replace} from 'lodash'

const employeeRoutes = {
  EMPLOYEES: '/employees',
  ADD_EMPLOYEE: '/employee/add',
  VIEW_EMPLOYEE: '/employee/:id',
  EDIT_EMPLOYEE: '/employee/:id/edit',
  EMPLOYEE_CHANGE_PASSWORD: '/change-password',
  EMPLOYEE_LEAVES: '/leaves',
  CREATE_LEAVE: '/create-leave',
  CREATE_PAYSLIP: '/employee/:id/payslip/add',
  PAYSLIPS: '/employee/:id/payslips'
}

const clientRoutes = {
  CLIENTS: '/clients',
  ADD_CLIENT: '/client/add',
  EDIT_CLIENT: '/client/:id/edit'
}

const otherRoutes = {
  CREATE_LEARNING_PATH: '/learning-path/add',
  NOT_FOUND: '/404',
  BLANK: '/blank',
  DEFAULT: '/'
}

const projectRoutes = {
  PROJECTS: '/projects',
  ADD_PROJECT: '/project/add',
  VIEW_PROJECT: '/project/:id',
  EDIT_PROJECT: '/project/:id/edit',
  PROJECT_TYPES: '/project-types',
  CREATE_INVOICE: '/invoice'
}

const authRoutes = {
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password/:slug'
}

const path = {
  ...authRoutes,
  ...employeeRoutes,
  ...clientRoutes,
  ...otherRoutes,
  ...projectRoutes
}

export const editRoute = (route, id) => replace(route, ':id', id)

export default path
