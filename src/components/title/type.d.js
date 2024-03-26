import React from 'react'

export interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  show?: boolean;
  hideButton?: boolean;
  text?: String;
  title?: String;
  headerElement?: any;
  onClick?: () => void;
  buttonLabel?: String;
}
