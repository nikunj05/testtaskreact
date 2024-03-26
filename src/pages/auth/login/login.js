import React from 'react'
import {Field} from 'redux-form'
import {BaseButton, BaseInput} from 'components'
import {Link} from 'react-router-dom'
import paths from 'navigation/navigation-routes'

export default props => {
  const {handleSubmit, onSubmit, isSaving} = props

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 justify-center h-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800  py-10">
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
                className="mb-2"
                type="email"
                placeholder="john@doe.com"
              />
              <Field
                label="Password"
                name="password"
                component={BaseInput}
                type="password"
                placeholder="***************"
                className="mb-5"
              />
              <BaseButton
                label={'Log in'}
                type="submit"
                loading={isSaving}
                onClick={handleSubmit(onSubmit)}
              />

              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to={paths.FORGOT_PASSWORD}>
                  Forgot password?
                </Link>
              </p>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}
