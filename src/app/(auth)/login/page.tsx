'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { logIn, logOut } from "@/redux/slices/auth-slice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { signIn } from "next-auth/react"
import { providerLogin } from "@/lib/auth/provider-login"
import Button from "@/components/form-elements/button/button"
import TextInput from "@/components/form-elements/text-input/text-input"

export default function LoginView() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch<AppDispatch>()

  const handleLogIn = () => {
    dispatch(logIn(username))
  }

  return (
    <div>
      <h1>PLEASE LOG IN</h1>
      <div className='form-wrap'>
        <TextInput inputType='email' placeholder='Email' value={username} handleChange={(e) => setUsername(e.target.value)} />
        <TextInput inputType='password' placeholder='Password' value={password} handleChange={(e) => setPassword(e.target.value)} />
        <Button handleClick={() => signIn()}>Log in</Button>
        <Link href='/create-account'>
          <Button handleClick={() => console.log('go to create')} hollow>Create account</Button>
        </Link>
      </div>
      <hr/>
      <div className='links'>
        <Button handleClick={() => signIn('google')}>Log in with Google</Button>
      </div>
    </div>
  )
}
