import {hasObjectLength, hasTextLength} from 'utils/condition'
import {showNotification} from './notification'

const requiredErrorMessage = errors => {
  const key = Object.keys(errors)?.[0]
  const error = Object.values(errors)?.[0]?.[0]
  error && showNotification({title: error, type: 'error'})
  return {key, error}
}

export const handleError = e => {
  try {
    const error = e?.data?.error
    const errors = e?.data?.errors
    const message = e?.data?.message ?? e?.message

    if (e && typeof e === 'string' && hasTextLength(e)) {
      showNotification({title: e, type: 'error'})
      return
    }

    if (hasObjectLength(errors)) {
      const {key, error} = requiredErrorMessage(errors)
      return {key, error}
    }

    if (error && typeof error === 'string') {
      showNotification({title: error, type: 'error'})
      return
    }

    if (message && typeof message === 'string') {
      showNotification({title: message, type: 'error'})
      return
    }
  } catch (e) {}
}
