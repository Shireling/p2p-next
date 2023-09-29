'use client'

import { redirect } from "next/navigation"
import { useState } from "react"

const SetupForm = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [addressLineOne, setAddressLineOne] = useState<string>('')
  const [addressLineTwo, setAddressLineTwo] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [stateProv, setStateProv] = useState<string>('')
  const [zip, setZip] = useState<string>('')
  const [dob, setDob] = useState<string>('')
  const [ssn, setSsn] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const createMoovAccount = async () => {
    
  }  

  return (
    <div>
      <div>
        <input type='text' placeholder='First' value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input type='text' placeholder='Last' value={lastName} onChange={e => setLastName(e.target.value)} />
      </div>
      <input type='text' placeholder='Address line 1' value={addressLineOne} onChange={e => setAddressLineOne(e.target.value)} />
      <input type='text' placeholder='Address line 2' value={addressLineTwo} onChange={e => setAddressLineTwo(e.target.value)} />
      <div>
        <input type='text' placeholder='City' value={city} onChange={e => setCity(e.target.value)} />
        <input type='text' placeholder='State' value={stateProv} onChange={e => setStateProv(e.target.value)} />
        <input type='text' placeholder='Zip' value={zip} onChange={e => setZip(e.target.value)} />
      </div>
      <div>
        <input type='text' placeholder='DOB' value={dob} onChange={e => setDob(e.target.value)} />
        <input type='text' placeholder='SSN' value={ssn} onChange={e => setSsn(e.target.value)} />
      </div>
      <input type='text' placeholder='Phone number' value={phone} onChange={e => setPhone(e.target.value)} />
      <button onClick={createMoovAccount}>Finish</button>
    </div>
  )
}

export default SetupForm
