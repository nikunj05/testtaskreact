import React from 'react'
import {IProps} from './type.d'
import {BaseButton, PageTitle} from 'components'

export default (props: IProps) => {
  const {
    show = true,
    hideButton = false,
    title,
    buttonLabel,
    onClick,
    headerElement
  } = props
  if (!show) return <React.Fragment />

  return (
    <>
      <div className="flex flex-1 justify-between items-center mt-3">
        <PageTitle>{title}</PageTitle>
        {!hideButton && <BaseButton label={buttonLabel} onClick={onClick} />}
      </div>
      {headerElement}
    </>
  )
}
