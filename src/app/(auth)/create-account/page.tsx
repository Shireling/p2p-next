'use client'

import Link from "next/link"

export default function CreateAccount() {
  return (
    <div>
      <h1>Create Account</h1>
      <form className='' onSubmit={() => console.log('create account form submitted')}>
        <input type='text' placeholder='Name' required />
        <input type='email' placeholder='Email' required />
        <input type='password' placeholder='Password' required />
        <input type='password' placeholder='Confirm password' required />
        <button>Create</button>
      </form>
    </div>
  )
}