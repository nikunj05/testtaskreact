import {replace} from 'lodash'

const otherRoutes = {
  CREATE_LEARNING_PATH: '/learning-path/add',
  NOT_FOUND: '/404',
  BLANK: '/blank',
  DEFAULT: '/'
}
const path = {
  ...otherRoutes
}

export const editRoute = (route, id) => replace(route, ':id', id)

export default path
