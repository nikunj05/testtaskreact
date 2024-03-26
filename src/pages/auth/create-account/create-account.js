import React from 'react'
import {Field} from 'redux-form'
import {BaseButton, BaseInput} from 'components'

export default props => {
  const {handleSubmit, onSubmit} = props
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 justify-center h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <main className="flex-1 items-center justify-center p-6 min-w-4xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>

              <Field
                label="Email"
                name="email"
                component={BaseInput}
                className="mt-1"
                type="email"
                placeholder="john@doe.com"
              />
              <Field
                label="Password"
                name="password"
                component={BaseInput}
                type="password"
                placeholder="***************"
                className="mt-1"
              />
              <BaseButton
                label={'Log in'}
                type="submit"
                className="w-full"
                onClick={handleSubmit(onSubmit)}
              />
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}
