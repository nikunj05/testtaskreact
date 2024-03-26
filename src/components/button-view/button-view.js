import React from 'react'
import {IProps} from './type.d.js'
const div = props => <div {...props} />
export const ButtonView = (props: IProps) => {
  const {show, button = 'normal'} = props
  if (!show) return <React.Fragment />
  const onClick = () => !props?.disabled && props?.onClick?.()
  const buttons = {normal: div}
  let ActionButton = buttons[button] ?? div

  return (
    <ActionButton
      {...props}
      class={`cursor-pointer ${props.className}`}
      onClick={onClick}
    />
  )
}

ButtonView.defaultProps = {
  show: 'true',
  button: 'normal'
}
