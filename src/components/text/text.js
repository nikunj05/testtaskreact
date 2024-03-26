import React from 'react'
import {IProps} from './type.d'
export const Text = (props: IProps) => {
  const {show = true, text, children} = props
  if (!show) return <React.Fragment />

  return <span {...props}>{text ?? children}</span>
}
