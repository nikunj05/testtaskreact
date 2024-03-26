import React from 'react'
import {Button} from '@windmill/react-ui'
import {BaseButton, Title} from 'components'
import ChangePasswordForm from './partials/change-password-form'

export default props => {
  const {handleSubmit, onSubmit, isSaving} = props
  const header = 'Change Password'

  return (
    <>
      <Title title={header} hideButton />
      <div className="max-h-full md:max-h-screen px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <ChangePasswordForm {...props} />
        <BaseButton
          loading={isSaving}
          onClick={handleSubmit(onSubmit)}
          label={'Save'}
        />
      </div>
    </>
  )
}
