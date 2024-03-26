import {getError} from 'validator/error'

export const employeeValidator = values => {
  const errors = {}
  const addressErrors = {}
  const {
    employee_name,
    phone,
    email,
    aadhar_card_number,
    designation,
    joining_date,
    notice_period,
    address,
    company_id,
    company_email,
    password,
    confirm_password
  } = values

  errors.employee_name = getError(employee_name, ['required'])
  errors.phone = getError(phone, ['required', 'mobileNumberFormat'])
  errors.email = getError(email, ['required', 'emailFormat'])
  errors.aadhar_card_number = getError(aadhar_card_number, [
    'required',
    'isNumberFormat'
  ])
  errors.designation = getError(designation, ['required'])
  errors.joining_date = getError(joining_date, ['required'])

  addressErrors.office_no = getError(address?.office_no, ['required'])
  addressErrors.building_name = getError(address?.building_name, ['required'])
  addressErrors.street = getError(address?.street, ['required'])
  addressErrors.state = getError(address?.state, ['required'])
  addressErrors.country = getError(address?.country, ['required'])
  addressErrors.zipcode = getError(address?.zipcode, [
    'required',
    'isNumberFormat'
  ])

  errors.company_id = getError(company_id, ['required'])
  errors.company_email = getError(company_email, ['required', 'emailFormat'])
  errors.password = getError(password, ['passwordCompared'], {
    fieldName: confirm_password
  })
  errors.confirm_password = getError(confirm_password, ['passwordCompared'], {
    fieldName: password
  })
  return {...errors, address: addressErrors}
}

export const ResetPasswordValidator = values => {
  const errors = {}
  const {current_password, password, confirm_password} = values

  errors.current_password = getError(current_password, ['required'])
  errors.password = getError(password, ['passwordCompared', 'required'], {
    fieldName: confirm_password
  })
  errors.confirm_password = getError(
    confirm_password,
    ['passwordCompared', 'required'],
    {fieldName: password}
  )
  return {...errors}
}
