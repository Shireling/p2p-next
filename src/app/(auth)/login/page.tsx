'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { logIn, logOut } from "@/redux/slices/auth-slice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { signIn } from "next-auth/react"
import { providerLogin } from "@/lib/auth/provider-login"

export default function LoginView() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch<AppDispatch>()

  const handleLogIn = () => {
    dispatch(logIn(username))
  }

  return (
    <div>
      <h1>Login</h1>
      <div className='form-wrap'>
        <input type='email' placeholder='Email' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => signIn()}>Log in</button>
        <Link href='/create-account'>
          <button>Create account</button>
        </Link>
      </div>
      <div className='links'>
        <button onClick={() => signIn('google')}>Log in with Google</button>
      </div>
    </div>
  )
}
