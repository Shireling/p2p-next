'use client'

import { useState } from "react"

const SetupForm = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [middleName, setMiddleName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const createMoovAccount = async () => {
    try{
      const res = await fetch('/api/accounts/create-moov-account', {
        method: 'POST',
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify({
          firstName,
          middleName,
          lastName,
          phone
        })
      })

      console.log(res.json())
    } catch(err) {
      console.error(err)
    }
  }  

  return (
    <div>
      <input type='text' placeholder='First name' value={firstName} onChange={e => setFirstName(e.target.value)} />
      <input type='text' placeholder='M' value={middleName} onChange={e => setMiddleName(e.target.value)} />
      <input type='text' placeholder='Last name' value={lastName} onChange={e => setLastName(e.target.value)} />
      <input type='text' placeholder='Phone number' value={phone} onChange={e => setPhone(e.target.value)} />
      <button onClick={createMoovAccount}>Finish</button>
    </div>
  )
}

export default SetupForm
