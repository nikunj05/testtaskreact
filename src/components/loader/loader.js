import images from 'assets/img'
import React, {Fragment} from 'react'
import {Sidebar} from 'primereact'

export default props => {
  const {hide = false, isOverlay = false, visible = false} = props
  if (hide) return <Fragment />
  const LOADER = (
    <div className="width-100% h-full flex justify-center items-center">
      <img src={images.loader} className="w-24" />
    </div>
  )
  if (isOverlay)
    return (
      <Sidebar
        style={{
          backgroundColor: '#ffffff11',
          opacity: 1,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flex: 1,
          height: '100%'
        }}
        visible={visible}
        blockScroll
        showCloseIcon={false}
        fullScreen>
        {LOADER}
      </Sidebar>
    )
  return LOADER
}
