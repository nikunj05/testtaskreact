import {Button} from 'primereact'
import React from 'react'
import {IProps} from './type.d'

export const BaseButton = (props: IProps) => {
  const {
    onClick = () => {},
    loading,
    disabled,
    icon,
    style,
    label,
    show,
    className,
    children
  } = props

  if (!show) return <React.Fragment />

  return (
    <Button
      style={style}
      className={`p-button-sm ${className}`}
      label={label}
      icon={icon}
      disabled={disabled}
      loading={loading}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}>
      {children}
    </Button>
  )
}
BaseButton.defaultProps = {show: true, style: {}}
