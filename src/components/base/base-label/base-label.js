import React, {FC} from 'react'

export const BaseLabel: FC<IProps> = props => {
  const {show = true, label, children, isRequired = false} = props
  if (!show) return null

  return (
    <>
      <span className="text-sm text-gray-500">
        {label ?? children}
        {isRequired ? <span className="text-red-500">{' *'}</span> : null}
      </span>
    </>
  )
}

interface IProps {
  isRequired?: boolean;
  style?: any;
}
