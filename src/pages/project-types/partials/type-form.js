import React from 'react'
import {Field} from 'redux-form'
import {BaseInput} from 'components/base'

export default props => {
  const {handleSubmit, onSubmit} = props
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <Field
          label="Name"
          name="name"
          component={BaseInput}
          type="text"
          placeholder="Name"
          className="mt-1"
          hidelabel
        />
      </div>
    </form>
  )
}
