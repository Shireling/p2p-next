'use client'

import { createContext, useState } from "react"
 
export const SetupStateContext = createContext({})
 
const SetupProvider = ({ children }: {children: React.ReactNode}) => {
  const value = useState({})
  
  return (
    <SetupStateContext.Provider value={value}>
      {children}
    </SetupStateContext.Provider>
  )
}

export default SetupProvider
