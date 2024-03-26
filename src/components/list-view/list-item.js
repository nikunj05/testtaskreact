import React from 'react'
import {ButtonView} from 'components'

export default props => {
  const {
    leftComponent,
    onClick,
    rightComponent,
    rightSubtitle,
    rightTitle,
    subtitle,
    title
  } = props
  return (
    <ButtonView onClick={onClick}>
      {leftComponent}
      {title}
      {subtitle}
      {rightComponent}
    </ButtonView>
  )
}
