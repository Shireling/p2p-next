'use client'

import Link from "next/link"

export default function CreateAccount() {
  return (
    <div>
      <h1>Create Account</h1>
      <form className='' onSubmit={() => console.log('login form submitted')}>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <input type='password' placeholder='Confirm password' />
        <button>Create</button>
      </form>
    </div>
  )
}