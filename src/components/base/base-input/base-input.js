import React from 'react'
import {Input, Textarea} from '@windmill/react-ui'
import {BaseLabel} from '../base-label'
import {InputText} from 'primereact'
// import {InputText} from 'primereact'
import t from 'locales/use-translation'

export default props => {
  const {
    show = true,
    inputName,
    type,
    hidelabel,
    hideError,
    isRequired = false,
    label,
    placeholder,
    input,
    meta
  } = props
  const hasError =
    !hideError &&
    meta?.submitFailed &&
    meta?.error &&
    typeof meta.error === 'string'

  if (!show) return <React.Fragment />
  let inputElement = (
    <div className="p-inputgroup mb-4">
      <Input
        placeholder={placeholder}
        className="bg-white py-4 border-cool-gray-400"
      />
    </div>
  )
  if (type === 'textarea')
    inputElement = (
      <div className="p-inputgroup mb-4">
        <Textarea
          placeholder={placeholder}
          className="bg-white py-4 border-cool-gray-400"
          rows="5"
        />
      </div>
    )
  if (inputName)
    inputElement = (
      <div className="p-inputgroup h-10 my-1">
        <span className="p-inputgroup-addon">{inputName}</span>
        <InputText
          {...props}
          {...input}
          value={input.value}
          onChange={input.onChange}
        />
      </div>
    )

  return (
    <div className="block">
      <BaseLabel show={!hidelabel} label={label} isRequired={isRequired} />
      {inputElement}
      {hasError && (
        <span className="text-xs text-red-700">{t(meta.error, {label})}</span>
      )}
      {/* <InputText value={input.value} onChange={input.onChange} /> */}
    </div>
  )
}
