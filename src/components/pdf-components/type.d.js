import React from 'react'
import {ViewStyle} from '@react-pdf/renderer'
export interface IProps {
  class?: String;
  text?: String;
  'bind-class'?: String;
  style?: ViewStyle;
  children?: React.ReactNode | any;
  [key: string]: string | number | any;
  show?: boolean;
}
