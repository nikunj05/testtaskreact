import React, {Fragment} from 'react'
import {TextPDF as Text, ViewPDF as View} from 'components'
import {CurrencyFormat} from 'utils'

export const ViewData = (props: IProps) => {
  const {show, pdfData, multiple, amountView, label, value} = props
  if (!show) return <Fragment />

  if (amountView && pdfData) {
    const {currency} = props
    return (
      <View class="my-5 flex-row justify-end items-center">
        <Text class="leading-0 font-bold text-right" text={label} />
        <Text
          class="leading-0 width-50% text-right"
          text={CurrencyFormat(value, currency)}
        />
      </View>
    )
  }
  if (multiple && pdfData) {
    const {label2, value2} = props
    return (
      <View class="my-8 flex-row justify-between">
        <View class="items-start width-50% flex-row">
          <Text class="min-w-100" text={label} />
          <Text class="pr-16" text={':'} />
          <Text class="max-w-170" text={value} />
        </View>
        <View class="items-start width-50% flex-row">
          <Text class="min-w-100" text={label2} />
          <Text class="pr-16" text={':'} />
          <Text class="max-w-170" text={value2} />
        </View>
      </View>
    )
  }

  if (pdfData) {
    return (
      <View class={`my-3 flex-1 flex-row ${props.className}`}>
        <Text class={`min-w-90 ${props?.['label-class']}`} text={label} />
        <Text class="pr-14" text={':'} />
        <Text text={value} />
      </View>
    )
  }

  if (amountView) {
    const {styleClass, currency} = props
    return (
      <div class={`flex items-center justify-between w-full ${styleClass}`}>
        <label class="text-sm font-semibold leading-5 text-gray-400 uppercase">
          {label}
        </label>
        <label class="flex items-center justify-center m-0 text-lg text-black uppercase">
          <span>{CurrencyFormat(value, currency)}</span>
        </label>
      </div>
    )
  }
  return (
    <div className="my-2">
      <label className="text-sm not-italic text-primary-800 font-sans">
        {label}
      </label>
      <p className="mt-1 text-base font-semibold leading-5 text-gray-700 non-italic">
        {value}
      </p>
    </div>
  )
}
ViewData.defaultProps = {
  show: true,
  pdfData: false,
  multiple: false,
  amountView: false
}
interface IProps {
  show?: boolean;
  pdfData?: boolean;
  amountView?: boolean;
  multiple?: boolean;
  currency?: any;
  label?: String;
  value?: String;
}
