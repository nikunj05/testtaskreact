import React, {FC, Component, useCallback, useEffect, useState} from 'react'
import {IProps} from './type.d'
import Default from 'assets/img/default.jpeg'
import {hasTextLength} from 'utils'

export class AssetImage extends Component<IProps> {
  static images = {
    default: Default
  }

  render() {
    const {src, show = true} = this.props
    if (!show || !hasTextLength(src) || src.includes('undefined'))
      return <React.Fragment />
    return <ImageComponent {...this.props} />
  }
}

const ImageComponent: FC<IProps> = props => {
  const {src, alt = 'default.png', placeholderImg = Default, errorImg} = props
  const [imgSrc, setSrc] = useState(placeholderImg || src)
  const onLoad = useCallback(() => setSrc(src), [src])
  const onError = useCallback(
    () => setSrc(errorImg || placeholderImg),
    [errorImg, placeholderImg]
  )

  useEffect(() => {
    const img = ImageComponent()
    img.src = src
    img.addEventListener('load', onLoad)
    img.addEventListener('error', onError)
    return () => {
      img.removeEventListener('load', onLoad)
      img.removeEventListener('error', onError)
    }
  }, [src, onLoad, onError])
  return <img {...props} alt={alt} src={imgSrc} />
}

ImageComponent.defaultProps = {
  src: Default,
  alt: 'default.png',
  placeholder: Default,
  errorImg: Default
}
