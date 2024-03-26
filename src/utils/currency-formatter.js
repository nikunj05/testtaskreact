import {omit} from 'lodash'
import currencyFormatter from 'currency-formatter'

type IAmount = Number

type IOptions = {
  code?: string | undefined,
  locale?: string | undefined,
  symbol?: string | undefined,
  decimal?: string | undefined,
  thousand?: string | undefined,
  precision?: number | undefined,
  precision_if_require?: boolean
}

export const CurrencyFormat = (amount: IAmount, options: IOptions = {}) => {
  let restOptions = omit(options, ['precision_if_require'])
  if (options?.precision_if_require) {
    const isNumber = Number.isInteger(amount)
    restOptions = {...restOptions, precision: isNumber ? 0 : 2}
  }

  return currencyFormatter.format(amount, {
    code: 'INR',
    symbol: 'INR ',
    ...restOptions
  })
}
