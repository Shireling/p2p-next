import * as yup from 'yup'

export const loginSchema = yup
  .object({
    username: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
  })
  .required()
