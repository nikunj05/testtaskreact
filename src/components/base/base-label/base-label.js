import React, {FC} from 'react'

export const BaseLabel: FC<IProps> = props => {
  const {show = true, label, children, isRequired = false} = props
  if (!show) return null

  return (
    <div className="mb-2">
      <span className="text-md text-black">
        {label ?? children}
        {isRequired ? <span className="text-red-500">{' *'}</span> : null}
      </span>
    </div>
  )
}

interface IProps {
  isRequired?: boolean;
  style?: any;
}
