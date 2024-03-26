import React from 'react'
import {BaseButton, Title} from 'components'
import ResetPasswordForm from './partials/reset-password-form'

export default props => {
  console.log({props})
  const {handleSubmit, onSubmit, isSaving} = props
  const header = 'Reset Password'

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 justify-center h-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <main className="flex items-center justify-center sm:p-12 md:w-full">
            <div className="w-full">
              <Title title={header} hideButton />
              <ResetPasswordForm {...props} />
              <BaseButton
                loading={isSaving}
                label="Reset Password"
                className="my-3"
                onClick={handleSubmit(onSubmit)}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
