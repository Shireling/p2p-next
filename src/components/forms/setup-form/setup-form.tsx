'use client'

import './setup-form.css'
import { redirect } from "next/navigation"
import { useState } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { setupSchema } from "@/lib/validation-schemas/setup-schema"
import Button from "@/components/form-elements/button/button"

interface Inputs {
  firstName: string
  lastName: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  zip: string
  dob: string
  ssn: string
  phone: string
}

const SetupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(setupSchema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <form className='spaced-10' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-fields-row'>
        <input type='text' placeholder='First' style={{ border: errors.firstName?.message ? '1px solid red' : '' }} {...register('firstName')} />
        <input type='text' placeholder='Last' style={{ border: errors.lastName?.message ? '1px solid red' : '' }} {...register('lastName')} />
      </div>
      <input type='text' placeholder='Address line 1' style={{ border: errors.addressLine1?.message ? '1px solid red' : '' }} {...register('addressLine1')} />
      <input type='text' placeholder='Address line 2' style={{ border: errors.addressLine2?.message ? '1px solid red' : '' }} {...register('addressLine2')} />
      <div className='form-fields-row'>
        <input type='text' placeholder='City' style={{ border: errors.city?.message ? '1px solid red' : '' }} {...register('city')} />
        <input type='text' placeholder='State' style={{ border: errors.state?.message ? '1px solid red' : '' }} {...register('state')} />
        <input type='text' placeholder='Zip' style={{ border: errors.zip?.message ? '1px solid red' : '' }} {...register('zip')} />
      </div>
      <div className='form-fields-row'>
        <input type='text' placeholder='DOB' style={{ border: errors.dob?.message ? '1px solid red' : '' }} {...register('dob')} />
        <input type='text' placeholder='SSN' style={{ border: errors.ssn?.message ? '1px solid red' : '' }} {...register('ssn')} />
      </div>
      <input type='text' placeholder='Phone number' style={{ border: errors.phone?.message ? '1px solid red' : '' }} {...register('phone')} />
      <Button inputType='submit'>Save & continue</Button>
    </form>
  )
}

export default SetupForm
