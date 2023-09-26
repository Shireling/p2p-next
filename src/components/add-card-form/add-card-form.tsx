'use client'

import { useState } from "react"

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
    <form>

      <input type='text' placeholder='Name on card' value={holderName} onChange={e => setHolderName(e.target.value)} />
      <input type='text' placeholder='Card number' value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
      <div>
        <input type='text' placeholder='MM' value={expMonth} onChange={e => setExpMonth(e.target.value)} />
        <input type='text' placeholder='YY' value={expYear} onChange={e => setExpYear(e.target.value)} />
      </div>
      <input type='password' placeholder='CVV' value={cvv} onChange={e => setCvv(e.target.value)} />
      <div className='address-check'>
        <input type='checkbox' checked={defaultAddress} onChange={() => setDefaultAddress(!defaultAddress)} />
        <p>Use address on this account</p>
      </div>
      {
        !defaultAddress && (
          <div>
            <input type='text' placeholder='Address line 1' value={address1} onChange={e => setAddress1(e.target.value)} />
            <input type='text' placeholder='Address line 2' value={address2} onChange={e => setAddress2(e.target.value)} />
            <input type='text' placeholder='City' value={city} onChange={e => setCity(e.target.value)} />
            <input type='text' placeholder='State' value={state} onChange={e => setState(e.target.value)} />
            <input type='text' placeholder='Zip' value={zip} onChange={e => setZip(e.target.value)} />
          </div>
        )
      }
      <button onClick={e => handleLinkCard(e)}>Add card</button>
    </form>
  )
}

export default AddCardForm
