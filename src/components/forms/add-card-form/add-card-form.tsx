'use client'

import Button from '@/components/form-elements/button/button'
import './add-card-form.css'
import TextInput from "@/components/form-elements/text-input/text-input"
import { useState } from "react"
import Link from 'next/link'
import Router from 'next/router'

const AddCardForm = () => {
  const [holderName, setHolderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expMonth, setExpMonth] = useState('')
  const [expYear, setExpYear] = useState('')
  const [cvv, setCvv] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [defaultAddress, setDefaultAddress] = useState(true)
  const [expInput, setExpInput] = useState('')

  const handleLinkCard = async (e: React.FormEvent) => {
    e.preventDefault()    

    const res = await fetch('/api/accounts/link-card', {
      method: 'POST',
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify({
        cardNumber, 
        expMonth, 
        expYear, 
        cvv, 
        holderName, 
        address1, 
        address2, 
        city, 
        state, 
        zip
      })
    })
  }

  return (
    <form className='add-card-form'>
      <TextInput inputType='text' placeholder='Name on card' value={holderName} handleChange={e => setHolderName(e.target.value)} />
      <TextInput inputType='text' placeholder='Card number' value={cardNumber} handleChange={e => setCardNumber(e.target.value)} />
      <div className='form-fields-3'>
        <TextInput inputType='text' placeholder='Exp' value={expInput} handleChange={e => setExpMonth(e.target.value)} />
        <TextInput inputType='password' placeholder='CVV' value={cvv} handleChange={e => setCvv(e.target.value)} />
      </div>
      <div className='address-check'>
        <input type='checkbox' checked={defaultAddress} onChange={() => setDefaultAddress(!defaultAddress)} />
        <p>Use address on this account</p>
      </div>
      {
        !defaultAddress && (
          <div className='add-card-form'>
            <TextInput inputType='text' placeholder='Address line 1' value={address1} handleChange={e => setAddress1(e.target.value)} />
            <TextInput inputType='text' placeholder='Address line 2' value={address2} handleChange={e => setAddress2(e.target.value)} />
            <div className='form-fields-3'>
              <TextInput inputType='text' placeholder='City' value={city} handleChange={e => setCity(e.target.value)} />
              <TextInput inputType='text' placeholder='State' value={state} handleChange={e => setState(e.target.value)} />
              <TextInput inputType='text' placeholder='Zip' value={zip} handleChange={e => setZip(e.target.value)} />
            </div>
          </div>
        )
      }
      <Button handleClick={handleLinkCard}>Link card</Button>
      <Link href='/'>
        <Button hollow>Cancel</Button>
      </Link>
    </form>
  )
}

export default AddCardForm
