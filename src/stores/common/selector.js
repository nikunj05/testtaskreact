import {hasObjectLength} from 'utils'

export const routeParamsSelector = match => ({
  isEditScreen: hasObjectLength(match?.params),
  params: match?.params
})
