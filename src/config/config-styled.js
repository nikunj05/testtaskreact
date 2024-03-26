import colors from 'colors'

export const textProperties = {
  'font-regular': {fontWeight: 'normal'},
  'font-light': {fontWeight: 'light'},
  'font-medium': {fontWeight: 'medium'},
  'font-bold': {fontWeight: 'bold', fontFamily: 'Helvetica-Bold'},
  'font-extra-bold': {fontWeight: 'extrabold'},
  'font-semi-bold': {fontWeight: 'semibold'},
  size: {fontSize: 0},
  'size-2xl': {fontSize: 36},
  'size-xl': {fontSize: 32},
  'size-lg': {fontSize: 22},
  'size-base': {fontSize: 16},
  'size-sm': {fontSize: 14},
  'size-xs': {fontSize: 12},

  'not-italic': {fontStyle: 'normal'},
  italic: {fontStyle: 'italic'},

  'text-underline': {textDecorationLine: 'underline'},
  'text-line-through': {textDecorationLine: 'line-through'},

  'font-weight-normal': {fontWeight: 'normal'},
  'font-weight-bold': {fontWeight: 'bold'},
  'font-weight': {fontWeight: 0},

  'letter-spacing': {letterSpacing: 0},
  leading: {lineHeight: 0},

  'text-left': {textAlign: 'left'},
  'text-right': {textAlign: 'right'},
  'text-center': {textAlign: 'center'},
  'text-justify': {textAlign: 'justify'},
  'normal-case': {textTransform: 'none'},
  capitalize: {textTransform: 'capitalize'},
  uppercase: {textTransform: 'uppercase'},
  lowercase: {textTransform: 'lowercase'}
}

export const viewProperties = {
  'content-start': {alignContent: 'flex-start'},
  'content-end': {alignContent: 'flex-end'},
  'content-center': {alignContent: 'center'},
  'content-stretch': {alignContent: 'stretch'},
  'content-between': {alignContent: 'space-between'},
  'content-around': {alignContent: 'space-around'},

  'items-start': {alignItems: 'flex-start'},
  'items-end': {alignItems: 'flex-end'},
  'items-center': {alignItems: 'center'},
  'items-stretch': {alignItems: 'stretch'},
  'items-baseline': {alignItems: 'baseline'},

  'self-start': {alignSelf: 'flex-start'},
  'self-end': {alignSelf: 'flex-end'},
  'self-center': {alignSelf: 'center'},
  'self-stretch': {alignSelf: 'stretch'},
  'self-baseline': {alignSelf: 'baseline'},
  'self-auto': {alignSelf: 'auto'},

  'justify-start': {justifyContent: 'flex-start'},
  'justify-end': {justifyContent: 'flex-end'},
  'justify-center': {justifyContent: 'center'},
  'justify-between': {justifyContent: 'space-between'},
  'justify-around': {justifyContent: 'space-around'},
  'justify-evenly': {justifyContent: 'space-evenly'},

  'overflow-visible': {overflow: 'visible'},
  'overflow-hidden': {overflow: 'hidden'},
  'overflow-scroll': {overflow: 'scroll'},

  hidden: {display: 'none'},
  'display-flex': {display: 'flex'},

  absolute: {position: 'absolute'},
  relative: {position: 'relative'},
  top: {top: 0},
  bottom: {bottom: 0},
  left: {left: 0},
  right: {right: 0},

  opacity: {opacity: 0},

  flex: {flex: 0},
  'flex-basis': {flexBasis: 0},
  'flex-row': {flexDirection: 'row'},
  'flex-col': {flexDirection: 'column'},
  'flex-row-reverse': {flexDirection: 'row-reverse'},
  'flex-col-reverse': {flexDirection: 'column-reverse'},
  'flex-grow': {flexGrow: 1},
  'flex-grow-0': {flexGrow: 0},
  'flex-shrink': {flexShrink: 1},
  'flex-shrink-0': {flexShrink: 0},
  'flex-wrap': {flexWrap: 'wrap'},
  'flex-nowrap': {flexWrap: 'nowrap'},
  'flex-wrap-reverse': {flexWrap: 'wrap-reverse'},

  height: {height: 0},
  width: {width: 0},
  'max-h': {maxHeight: 0},
  'max-w': {maxWidth: 0},
  'min-h': {minHeight: 0},
  'min-w': {minWidth: 0},

  mt: {marginTop: 0},
  mb: {marginBottom: 0},
  ml: {marginLeft: 0},
  mr: {marginRight: 0},
  mx: {marginHorizontal: 0},
  my: {marginVertical: 0},

  pt: {paddingTop: 0},
  pb: {paddingBottom: 0},
  pl: {paddingLeft: 0},
  pr: {paddingRight: 0},
  px: {paddingHorizontal: 0},
  py: {paddingVertical: 0},

  z: {zIndex: 0}
}

export const imageProperties = {
  'image-cover': {resizeMode: 'cover'},
  'image-contain': {resizeMode: 'contain'},
  'image-stretch': {resizeMode: 'stretch'},
  'image-repeat': {resizeMode: 'repeat'},
  'image-center': {resizeMode: 'center'},
  'aspect-ratio': {aspectRatio: null}
}

export const colorsProperties = {
  'bg-background': {backgroundColor: colors.backgroundColor},

  'bg-primary': {backgroundColor: colors.primary},
  'bg-primary-200': {backgroundColor: colors.primary2},
  'bg-primary-300': {backgroundColor: colors.primary3},
  'bg-primary-500': {backgroundColor: colors.primary5},
  'bg-primary-700': {backgroundColor: colors.primary7},
  'bg-primary-800': {backgroundColor: colors.primary8},

  'bg-white': {backgroundColor: colors.white},
  'bg-black': {backgroundColor: colors.black},
  'bg-black-200': {backgroundColor: colors.black2},
  'bg-success': {backgroundColor: colors.success},
  'bg-danger': {backgroundColor: colors.danger},

  'bg-gray-100': {backgroundColor: colors.gray1},
  'bg-gray-200': {backgroundColor: colors.gray2},
  'bg-gray-300': {backgroundColor: colors.gray3},
  'bg-gray-400': {backgroundColor: colors.gray4},
  'bg-gray-500': {backgroundColor: colors.gray5},
  'bg-gray-600': {backgroundColor: colors.gray6},
  'bg-gray-700': {backgroundColor: colors.gray7},
  'bg-gray-800': {backgroundColor: colors.gray8},
  'bg-gray-900': {backgroundColor: colors.gray9},
  'bg-gray-light-200': {backgroundColor: colors.grayLight2},
  'bg-gray-light-300': {backgroundColor: colors.grayLight3},
  'bg-gray-light-400': {backgroundColor: colors.grayLight4},
  'bg-gray-light-700': {backgroundColor: colors.grayLight7},
  'bg-green-light': {backgroundColor: colors.lightGreen},
  'bg-green-light-200': {backgroundColor: colors.lightGreen2},
  'bg-green-light-300': {backgroundColor: colors.lightGreen3},
  'bg-warning-light': {backgroundColor: colors.warningLight},
  'bg-danger-light': {backgroundColor: colors.dangerLight},
  'bg-transparent': {backgroundColor: colors.transparent},

  'text-primary': {color: colors.primary},
  'text-primary-200': {color: colors.primary2},
  'text-primary-300': {color: colors.primary3},
  'text-primary-400': {color: colors.primary4},
  'text-primary-500': {color: colors.primary5},
  'text-primary-700': {color: colors.primary7},

  'text-white': {color: colors.white},
  'text-black': {color: colors.black},

  'text-gray-100': {color: colors.gray1},
  'text-gray-400': {color: colors.gray4},
  'text-gray-500': {color: colors.gray5},
  'text-gray-600': {color: colors.gray6},
  'text-gray-700': {color: colors.gray7},
  'text-gray-800': {color: colors.gray8},
  'text-gray-900': {color: colors.gray9},
  'text-success': {color: colors.success},
  'text-danger': {color: colors.danger},
  'text-danger-dark': {color: colors.dangerDark},
  'text-warning': {color: colors.warningDark}
}

export const borderProperties = {
  'border-t-w': {borderTopWidth: 0},
  'border-b-w': {borderBottomWidth: 0},
  'border-l-w': {borderLeftWidth: 0},
  'border-r-w': {borderRightWidth: 0},
  'border-w': {borderWidth: 0},

  rounded: {borderRadius: 0},
  'rounded-b-e': {borderBottomEndRadius: 0},
  'rounded-b-l': {borderBottomLeftRadius: 0},
  'rounded-b-r': {borderBottomRightRadius: 0},
  'rounded-b-s': {borderBottomStartRadius: 0},
  'rounded-t-e': {borderTopEndRadius: 0},
  'rounded-t-l': {borderTopLeftRadius: 0},
  'rounded-t-r': {borderTopRightRadius: 0},
  'rounded-t-s': {borderTopStartRadius: 0},

  'border-solid': {borderStyle: 'solid'},
  'border-dotted': {borderStyle: 'dotted'},
  'border-dashed': {borderStyle: 'dashed'},

  'border-t-primary': {borderTopColor: colors.primary},
  'border-t-primary-200': {borderTopColor: colors.primary2},
  'border-t-primary-300': {borderTopColor: colors.primary3},

  'border-t-white': {borderTopColor: colors.white},
  'border-t-black': {borderTopColor: colors.black},

  'border-t-gray-200': {borderTopColor: colors.gray2},
  'border-t-gray-400': {borderTopColor: colors.gray4},
  'border-t-gray-500': {borderTopColor: colors.gray5},
  'border-t-gray-600': {borderTopColor: colors.gray6},
  'border-t-gray-700': {borderTopColor: colors.gray7},
  'border-t-gray-800': {borderTopColor: colors.gray8},
  'border-t-gray-900': {borderTopColor: colors.gray9},

  'border-b-primary': {borderBottomColor: colors.primary},
  'border-b-primary-200': {borderBottomColor: colors.primary2},
  'border-b-primary-300': {borderBottomColor: colors.primary3},

  'border-b-white': {borderBottomColor: colors.white},
  'border-b-black': {borderBottomColor: colors.black},

  'border-b-gray-200': {borderBottomColor: colors.gray2},
  'border-b-gray-400': {borderBottomColor: colors.gray4},
  'border-b-gray-500': {borderBottomColor: colors.gray5},
  'border-b-gray-600': {borderBottomColor: colors.gray6},
  'border-b-gray-700': {borderBottomColor: colors.gray7},
  'border-b-gray-800': {borderBottomColor: colors.gray8},
  'border-b-gray-900': {borderBottomColor: colors.gray9},

  'border-l-primary': {borderLeftColor: colors.primary},
  'border-l-primary-200': {borderLeftColor: colors.primary2},
  'border-l-primary-300': {borderLeftColor: colors.primary3},

  'border-l-white': {borderLeftColor: colors.white},
  'border-l-black': {borderLeftColor: colors.black},

  'border-l-gray-200': {borderLeftColor: colors.gray2},
  'border-l-gray-400': {borderLeftColor: colors.gray4},
  'border-l-gray-500': {borderLeftColor: colors.gray5},
  'border-l-gray-600': {borderLeftColor: colors.gray6},
  'border-l-gray-700': {borderLeftColor: colors.gray7},
  'border-l-gray-800': {borderLeftColor: colors.gray8},
  'border-l-gray-900': {borderLeftColor: colors.gray9},

  'border-r-primary': {borderRightColor: colors.primary},
  'border-r-primary-200': {borderRightColor: colors.primary2},
  'border-r-primary-300': {borderRightColor: colors.primary3},

  'border-r-white': {borderRightColor: colors.white},
  'border-r-black': {borderRightColor: colors.black},

  'border-r-gray-200': {borderRightColor: colors.gray2},
  'border-r-gray-400': {borderRightColor: colors.gray4},
  'border-r-gray-500': {borderRightColor: colors.gray5},
  'border-r-gray-600': {borderRightColor: colors.gray6},
  'border-r-gray-700': {borderRightColor: colors.gray7},
  'border-r-gray-800': {borderRightColor: colors.gray8},
  'border-r-gray-900': {borderRightColor: colors.gray9},

  'border-primary': {borderColor: colors.primary},
  'border-primary-200': {borderColor: colors.primary2},
  'border-primary-300': {borderColor: colors.primary3},
  'border-primary-400': {borderColor: colors.primary4},
  'border-primary-500': {borderColor: colors.primary5},
  'border-primary-700': {borderColor: colors.primary7},

  'border-white': {borderColor: colors.white},
  'border-black': {borderColor: colors.black},
  'border-success': {borderColor: colors.success},
  'border-danger': {borderColor: colors.danger},
  'border-bg': {borderColor: colors.background},

  'border-gray-200': {borderColor: colors.gray2},
  'border-gray-300': {borderColor: colors.gray3},
  'border-gray-400': {borderColor: colors.gray4},
  'border-gray-500': {borderColor: colors.gray5},
  'border-gray-600': {borderColor: colors.gray6},
  'border-gray-700': {borderColor: colors.gray7},
  'border-gray-800': {borderColor: colors.gray8},
  'border-gray-900': {borderColor: colors.gray9},
  'border-gray-light-300': {borderColor: colors.grayLight3},
  'border-gray-light-400': {borderColor: colors.grayLight4},
  'border-gray-light-500': {borderColor: colors.grayLight5},
  'border-gray-light-600': {borderColor: colors.grayLight6}
}

export default {
  ...textProperties,
  ...viewProperties,
  ...imageProperties,
  ...colorsProperties,
  ...borderProperties
}
