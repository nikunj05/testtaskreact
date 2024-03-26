import {ViewData} from 'components'
import React from 'react'

export default props => {
  const {getFinalAmountData, formValues} = props
  const currency = formValues?.project?.currency ?? ''
  const {subtotal, taxValue, taxName, total} = getFinalAmountData()
  return (
    <div class="px-5 py-4 mt-6 bg-white border border-gray-200 border-solid rounded md:min-w-[390px] min-w-[300px] lg:mt-7">
      <ViewData
        amountView
        currency={currency}
        label="Subtotal"
        value={subtotal}
      />
      <ViewData
        amountView
        currency={currency}
        label={taxName}
        value={taxValue}
      />
      <ViewData
        amountView
        currency={currency}
        label="Total Amount:"
        value={total}
        styleClass="pt-2 mt-5 border-t border-gray-200"
      />
    </div>
  )
}
