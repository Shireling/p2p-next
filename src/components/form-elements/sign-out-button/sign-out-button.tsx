'use client'

import { signOut } from "next-auth/react"
import './sign-out-button.css'

const SignOutButton = ({children}: {children: React.ReactNode}) => {
  return (
    <span onClick={() => signOut()}>{children}</span>
  )
}

export default SignOutButton
