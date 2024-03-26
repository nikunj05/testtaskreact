import React from 'react'

export interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: String | any;
  source: any;
  alt: String;
  show?: boolean | any;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  placeholderImg?: string;
  errorImg?: string;
}
