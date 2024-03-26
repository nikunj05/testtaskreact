// local
const ENDPOINT = 'http://localhost:3000/'
// production
// const ENDPOINT = 'http://147.182.161.170:3000/'
const ENDPOINT_API = ENDPOINT + 'api/'

export const BANK_ACCOUNT_DETAILS = {
  account_holder: 'Avinash Rathod',
  account_no: '123456789012',
  swift_code: '1231223414',
  ifsc_code: 'SBIN0060016',
  bank_name: 'State bank of India',
  bank_address: 'Sihor, Bhavnagar 364240'
}
export const COMPANY_DETAILS = {
  name: 'Coder Scotch Technology',
  address:
    'Synergy Tower, A-507, Corporate Rd, Prahlad Nagar, Ahmedabad, Gujarat 380051',
  phone: '+91 81284 53853',
  email: 'info@coderscotch.com'
}

export default {
  ENDPOINT,
  ENDPOINT_API,
  BANK_ACCOUNT_DETAILS
}
