import React from 'react'
import {Field} from 'redux-form'
import {BaseButton, BaseInput} from 'components'

export default ({mailSent, handleSubmit, onSubmit, isSaving}) => {
  let RenderComponent = (
    <>
      <Field
        label="Email"
        name="email"
        component={BaseInput}
        className="my-5"
        type="email"
        required
        placeholder="john@doe.com"
      />
      <BaseButton
        loading={isSaving}
        label={'Recover password'}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  )

  if (mailSent)
    RenderComponent = (
      <h3>Reset password link sent to your registered email address</h3>
    )

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 justify-center h-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800  py-10">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-full">
            <div className="w-full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Forgot password
                </h1>
                {RenderComponent}
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
