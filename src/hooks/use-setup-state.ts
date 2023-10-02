import { useState } from "react"

export function useSetupState() {
  const [step, setStep] = useState('1')

  const handleSetStep = (value: string) => {
    console.log('setp')
    
    setStep(value)
  }

  return {step, handleSetStep}
}
