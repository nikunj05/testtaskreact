import {trim} from 'lodash'
import {EMAIL_REGEX, MOBILE_NUMBER_REGEX} from './regex'

type IValidationOptions = {
  fieldName?: string,
  minNumber?: number,
  maxNumber?: number,
  maxCharacter?: number | string,
  minCharacter?: number | string,
  message?: string
}

type ErrorType =
  | 'emailFormat'
  | 'required'
  | 'minCharacterRequired'
  | 'isNumberFormat'
  | 'passwordCompared'
  | 'mobileNumberFormat'

export function getError(
  value: string | number | any,
  errorTypes: Array<ErrorType>,
  options: IValidationOptions = {}
) {
  const {fieldName, minCharacter, message = null} = options

  const errorTypeMap = {
    emailFormat: () => (EMAIL_REGEX.test(value) ? null : 'validation.email'),

    mobileNumberFormat: () =>
      value && MOBILE_NUMBER_REGEX.test(value)
        ? null
        : 'validation.mobile_number',
    required: () => (!trim(value) ? message ?? 'validation.required' : null),

    minCharacterRequired: () => {
      if (value) {
        return value.length < minCharacter
          ? message || 'validation.min_character'
          : null
      }
    },

    isNumberFormat: () => (isNaN(Number(value)) ? 'validation.numeric' : null),

    passwordCompared: () =>
      value
        ? value === fieldName
          ? null
          : 'validation.password_compare'
        : fieldName
        ? value === fieldName
          ? null
          : 'validation.password_compare'
        : null
  }

  const errorType = errorTypes.find(
    error => errorTypeMap[error] && errorTypeMap[error]()
  )

  return errorType ? errorTypeMap[errorType]() : null
}
