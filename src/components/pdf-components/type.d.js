import React from 'react'
export interface IProps {
  class?: String;
  text?: String;
  'bind-class'?: String;
  style?: any;
  children?: React.ReactNode | any;
  [key: string]: string | number | any;
  show?: boolean;
}
