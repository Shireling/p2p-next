import * as yup from 'yup'

export const setupSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    addressLine1: yup.string().required(),
    addressLine2: yup.string(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    dob: yup.string().required(),
    ssn: yup.string().trim().matches(/^(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4}$/).required(),
    phone: yup.string().required()
  })
  .required()
