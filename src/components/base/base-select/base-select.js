import React from 'react'
import {Dropdown} from 'primereact'
import {BaseLabel} from '../base-label'
import t from 'locales/use-translation'

export const BaseSelect = (props: IProps) => {
  const {
    items,
    hideError,
    disabled,
    placeholder,
    label,
    displayKey,
    input = {},
    required,
    meta = {},
    renderItem
  } = props
  const value = input.value[displayKey]
  const hasError =
    !hideError &&
    meta?.submitFailed &&
    meta?.error &&
    typeof meta.error === 'string'

  const item = item => <div>{item[displayKey]}</div>
  return (
    <div className="grid">
      <BaseLabel label={label} required={required} />
      <Dropdown
        itemTemplate={renderItem ? renderItem : item}
        options={items}
        disabled={disabled}
        selectedItemTemplate={item}
        className="max-h-10 items-center"
        onChange={input.onChange}
        placeholder={value ?? placeholder ?? label}
      />
      {hasError && (
        <span className="text-xs text-red-700">{t(meta.error)}</span>
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
  renderItem?: any;
}
