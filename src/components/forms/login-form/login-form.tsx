"use client"

import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "@/lib/validation-schemas/login-schema"
import Button from "@/components/form-elements/button/button"

interface Inputs {
  username: string
  password: string
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(loginSchema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder="Username" {...register("username")} />
        <p className="form-error-label">{errors.username?.message}</p>
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p className="form-error-label">{errors.password?.message}</p>
      </div>
      <Button inputType="submit">Log in</Button>
    </form>
  )
}

export default LoginForm
