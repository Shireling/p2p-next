"use client"

import { useSearchParams } from "next/navigation"
import { useSetupState } from "@/hooks/use-setup-state"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useCallback } from "react"
import { useAppSelector } from "@/redux/store"
import SetupForm from "../forms/setup-form/setup-form"
import Tos from "../forms/setup-form/tos"

const SetupFlow = () => {
  const step = useAppSelector(state => state.setupFlowReducer.value.step)
  const data = useAppSelector(state => state.setupFlowReducer.value.data)
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const params = new URLSearchParams(searchParams)

  const createQueryString = (name: string, value: string) => {
    params.set(name, value)

    return params.toString()
  }

  useEffect(() => {
    router.push(pathname + "?" + createQueryString("step", step.toString()))
  })

  console.log(data)
  

  return (
    <>
      {params.get("step") === "1" && <SetupForm />}
      {params.get("step") === "2" && <Tos />}
    </>
  )
}

export default SetupFlow
