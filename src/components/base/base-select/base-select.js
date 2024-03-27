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
    onChange,
    required,
    meta = {},
    renderItem
  } = props
  const value = props?.value?.[displayKey]
  const hasError =
    !hideError &&
    meta?.submitFailed &&
    meta?.error &&
    typeof meta.error === 'string'

  const item = item => <div>{item?.[displayKey]}</div>
  const displayText = value ? value : placeholder
  return (
    <div className="grid">
      <BaseLabel label={label} required={required} />
      <Dropdown
        value={value}
        itemTemplate={renderItem ? renderItem : item}
        options={items}
        disabled={disabled}
        selectedItemTemplate={item}
        className="mb-4 items-center border border-gray-400"
        onChange={({value}) => onChange(value)}
        placeholder={displayText}
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
