import i18n from 'i18next'
import 'config/config-i18n'

export const setLocale = locale => {
  i18n.changeLanguage(locale)
}

export default (title, options = {}) => {
  return i18n.t(title, {...options})
}
