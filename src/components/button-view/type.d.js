import React from 'react'

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  button?: 'normal';
  show?: any | boolean;
  disabled?: boolean;
}
