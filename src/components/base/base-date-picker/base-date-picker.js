import React, {Fragment} from 'react'
import {Calendar} from 'primereact'
import {BaseLabel} from '../base-label'
import {hasTextLength} from 'utils'
import t from 'locales/use-translation'

export const BaseDatePicker = (props: IProps) => {
  const {
    disabled,
    show = true,
    hideError,
    placeholder,
    label,
    input = {},
    required,
    meta = {}
  } = props
  if (!show) return <Fragment />

  const hasError =
    !hideError &&
    meta?.submitFailed &&
    meta?.error &&
    typeof meta.error === 'string'
  const value = input.value
  return (
    <div className="block">
      <BaseLabel label={label} isRequired={required} />
      <Calendar
        className="h-10 w-full"
        dateFormat="dd/mm/yy"
        {...props}
        value={value}
        disabled={disabled}
        placeholder={hasTextLength(value) ? value : placeholder}
        onChange={input.onChange}
      />
      {hasError && (
        <span className="min-h-2 text-xs text-red-700">
          {t(meta.error, {label})}
        </span>
      )}
    </div>
  )
}

interface IProps {
  isRequired?: boolean;
  show?: boolean;
  onClick?: func;
  label?: String;
  values?: String | any;
  style?: any;
}
