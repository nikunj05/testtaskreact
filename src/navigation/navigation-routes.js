import {replace} from 'lodash'

const otherRoutes = {
  CREATE_LEARNING_PATH: '/learning-path/add',
  NOT_FOUND: '/404',
  BLANK: '/blank',
  DEFAULT: '/'
}

const authRoutes = {
  LOGIN: '/login'
}

const path = {
  ...authRoutes,
  ...otherRoutes
}

export const editRoute = (route, id) => replace(route, ':id', id)

export default path
