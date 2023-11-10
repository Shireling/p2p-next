"use client"

import "./setup-form.css"
import { redirect } from "next/navigation"
import { useState } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { setupSchema } from "@/lib/validation-schemas/setup-schema"
import { useSetupState } from "@/hooks/use-setup-state"
import Button from "@/components/form-elements/button/button"
import { useDispatch } from "react-redux"
import { setStep, setData } from "@/redux/slices/setup-slice"

interface Inputs {
  firstName: string
  lastName: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  zip: string
  dob: string
  ssn: string
  phone: string
}

const SetupForm = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(setupSchema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => {    
    dispatch(setData({
      firstName: data.firstName,
      lastName: data.lastName,
      addressLineOne: data.addressLine1,
      addressLineTwo: data.addressLine2 || '',
      city: data.city,
      stateProv: data.state,
      zip: data.zip,
      phone: data.phone
    }))
    dispatch(setStep('2'))
  }

  return (
    <>
      <h1>REGULATION STUFF</h1>
      <form className="spaced-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-fields-row">
          <input
            type="text"
            placeholder="First"
            style={{ border: errors.firstName?.message ? "1px solid red" : "" }}
            {...register("firstName")}
          />
          <input
            type="text"
            placeholder="Last"
            style={{ border: errors.lastName?.message ? "1px solid red" : "" }}
            {...register("lastName")}
          />
        </div>
        <input
          type="text"
          placeholder="Address line 1"
          style={{ border: errors.addressLine1?.message ? "1px solid red" : "" }}
          {...register("addressLine1")}
        />
        <input
          type="text"
          placeholder="Address line 2"
          style={{ border: errors.addressLine2?.message ? "1px solid red" : "" }}
          {...register("addressLine2")}
        />
        <div className="form-fields-row">
          <input
            type="text"
            placeholder="City"
            style={{ border: errors.city?.message ? "1px solid red" : "" }}
            {...register("city")}
          />
          <input
            type="text"
            placeholder="State"
            style={{ border: errors.state?.message ? "1px solid red" : "" }}
            {...register("state")}
          />
          <input
            type="text"
            placeholder="Zip"
            style={{ border: errors.zip?.message ? "1px solid red" : "" }}
            {...register("zip")}
          />
        </div>
        <div className="form-fields-row">
          <input
            type="text"
            placeholder="DOB"
            style={{ border: errors.dob?.message ? "1px solid red" : "" }}
            {...register("dob")}
          />
          <input
            type="text"
            placeholder="SSN"
            style={{ border: errors.ssn?.message ? "1px solid red" : "" }}
            {...register("ssn")}
          />
        </div>
        <input
          type="text"
          placeholder="Phone number"
          style={{ border: errors.phone?.message ? "1px solid red" : "" }}
          {...register("phone")}
        />
        <Button inputType="submit">Save & continue</Button>
      </form>
    </>
  )
}

export default SetupForm
