import * as yup from 'yup'

export const setupSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    addressLine1: yup.string().required('Please enter your address'),
    addressLine2: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    dob: yup.string().required(),
    ssn: yup.string().required(),
    phone: yup.string().required()
  })
  .required()
