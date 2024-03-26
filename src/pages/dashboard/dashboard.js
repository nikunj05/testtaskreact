import React from 'react'
import {Title} from 'components'
import Cards from './partials/cards'

export default props => {
  const {fetchInitialData} = props
  return (
    <>
      <Title title={'Dashboard'} hideButton />
      <Cards {...props} />
    </>
  )
}
