export const hasValue = field => {
  return field !== null && typeof field !== 'undefined'
}

export const isBooleanTrue = value =>
  hasValue(value) &&
  (value === 'YES' || value === 'yes' || value === 1 || value === true)

export const isValueExist = (object, value) => {
  let isExist = false
  if (!hasObjectLength(object) || !hasValue(value)) return false
  Object.keys(object).forEach(key => {
    if (object[key] === value) isExist = true
  })
  return isExist
}

export const isAllContainValue = (object, value) => {
  if (!hasObjectLength(object) || !hasValue(value)) return false
  return Object.values(object).every(val => {
    if (val !== value) {
      return false
    }
    return true
  })
}

export const hasLength = field => {
  return field && field.length !== 0 && typeof field === 'object'
}

export const isArray = fields => {
  return hasValue(fields) && hasLength(fields)
}

export const isEmpty = fields => {
  return !hasValue(fields) || !hasLength(fields)
}

export const arrayData = data => {
  return !isEmpty(data) ? data : []
}

export const hasObjectLength = field => {
  return field && Object.keys(field).length !== 0
}

export const hasTextLength = string => {
  if (!string || !hasValue(string) || string.length === 0) {
    return false
  }

  return true
}

export const hasNumber = string => {
  return /\d/.test(string)
}

export const isPositive = string => hasNumber(string) && string >= 0
