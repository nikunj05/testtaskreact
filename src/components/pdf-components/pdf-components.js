import React from 'react'
import {Text, View, Link, Image} from '@react-pdf/renderer'
import {getClass} from 'utils'
import {IProps} from './type.d'

export const ViewPDF = (props: IProps) => {
  const {show = true} = props
  if (!show) return <React.Fragment />

  const styleClass = getClass(props, props.class)

  const styleBindClass = getClass(props, props['bind-class'])
  const styles = [styleClass, styleBindClass, props.style]

  return (
    <View {...props} style={styles}>
      {props.children}
    </View>
  )
}
export const TextPDF = (props: IProps) => {
  const {show = true, style, text, children} = props
  if (!show) {
    return <React.Fragment />
  }
  const styleClass = getClass(
    props,
    `text-left leading-1.4 font-regular size-sm and:text-black ${props.class}`
  )
  const styleBindClass = getClass(props, props['bind-class'])
  const styles = [{fontFamily: 'Helvetica'}, styleClass, styleBindClass, style]

  return (
    <Text allowFontScaling={false} {...props} style={styles}>
      {text ?? children}
    </Text>
  )
}
export const ImagePDF = (props: IProps) => {
  const {show = true} = props
  if (!show) return <React.Fragment />

  const styleClass = getClass(props, props.class)

  const styleBindClass = getClass(props, props['bind-class'])
  const styles = [styleClass, styleBindClass, props.style]

  return (
    <Image {...props} style={styles}>
      {props.children}
    </Image>
  )
}
export const LinkPDF = (props: IProps) => {
  const {show = true} = props
  if (!show) return <React.Fragment />

  const styleClass = getClass(props, props.class)

  const styleBindClass = getClass(props, props['bind-class'])
  const styles = [styleClass, styleBindClass, props.style]

  return (
    <Link {...props} style={styles}>
      {props.children}
    </Link>
  )
}
