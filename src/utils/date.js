import moment from 'moment'

export const formattedDate = date =>
  moment(date)?.format?.('DD/MM/YYYY') ?? date

export const monthYearDate = date => moment(date)?.format?.('MMMM YYYY') ?? date

export const isDatePassed = date => moment(date).isSameOrBefore()
