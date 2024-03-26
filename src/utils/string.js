import {hasTextLength} from './condition'
import {capitalize, join, startCase, toLower} from 'lodash'
import env from 'config/config-api'

export const ADDRESS_STRING = [
  'office_no',
  'building_name',
  'street',
  'town',
  'city',
  'state',
  'zipcode',
  'country.name'
]
export const formattedAddress = object => {
  let addressValue = []
  for (const key of ADDRESS_STRING) {
    let value = object?.[key]
    if (hasTextLength(value)) {
      if (key === 'floor' && !value.toLowerCase().includes('floor')) {
        value += ` Floor`
      }
      addressValue.push(value)
    }
  }
  return join(addressValue, ', ')
}

export const makeTitleCase = string => startCase(toLower(string))

export const capitalizeFirstLetter = string => capitalize(string)

export const fileUrl = url => `${env.ENDPOINT}${url}`

export const fileExtension = url => url.split('/').pop()
