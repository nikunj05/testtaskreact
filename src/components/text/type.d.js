import React from 'react'

export interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  show?: boolean;
  text?: String;
}
