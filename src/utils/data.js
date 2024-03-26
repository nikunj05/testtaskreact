import {pick, partialRight, map} from 'lodash'

export const pickFromCollection = (data, pickItems) =>
  map(data, partialRight(pick, pickItems))
