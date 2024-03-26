import React from 'react'
import {RadioButton} from 'primereact/radiobutton'
import {BaseLabel} from '../base-label'
import t from 'locales/use-translation'
import {ButtonView} from 'components/button-view'

export const BaseRadioButton = (props: IProps) => {
  const {hideError, label, input = {}, required, options, meta = {}} = props
  const hasError =
    !hideError &&
    meta?.submitFailed &&
    meta?.error &&
    typeof meta.error === 'string'
  const value = input.value
  return (
    <div className="block">
      <BaseLabel label={label} isRequired={required} />
      <div className="flex flex-row items-center mt-2 ml-2 gap-2">
        {options.map((item, i) => (
          <ButtonView
            key={i}
            onClick={e => input.onChange(item.value)}
            className="z-1 flex flex-row items-center gap-2 pb-1">
            <RadioButton
              value={item.value}
              inputId={i}
              onChange={e => input.onChange(e.value)}
              checked={value === item.value}
            />
            <BaseLabel label={item.name} isRequired={false} />
          </ButtonView>
        ))}
      </div>
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
