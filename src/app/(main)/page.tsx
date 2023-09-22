'use client'

import ConfirmationModal from '@/components/confirmation-modal/confirmation-modal'
import { useState } from 'react'
import { useAppSelector } from '@/redux/store'
import { useModal } from '@/hooks/use-modal'

export default function SendMoney() {
  const [amount, setAmount] = useState(0)
  const [recipient, setRecipient] = useState('')

  const username = useAppSelector((state) => state.authReducer.value.username)
  const confirmationModal = useModal()  

  return (
    <>
      <section>
        <h1>Welcome back, {username}!</h1>
        <div className='row-item'>
          <p>Send to</p>
          <select id='recipient-dropdown' name='recipient' defaultValue='DEFAULT' required onChange={(e) => setRecipient(e.target.value)}>
            <option value="DEFAULT" disabled hidden>Select recipient</option>
            <option value="Angela Bassett">Angela Bassett</option>
            <option value="Rachel Wicsz">Rachel Weicsz</option>
            <option value="Brendan Frasier">Brendan Frasier</option>
          </select>
        </div>
        <div className='row-item'>
          <p>How much?</p>
          <div className='dollar-input-wrap'>
            <p className='dollar-input-sign'>$</p>
            <input className='dollar-input' type='number' max={10000} required onChange={(e) => setAmount(Number(e.target.value))} />
          </div>
        </div>
        <div className='row-item no-border'>
          <button onClick={() => confirmationModal.set(true)}>Send</button>
        </div>
      </section>
      {
        confirmationModal.show && <ConfirmationModal 
          prompt={`You are about to send $${amount} to ${recipient}`}
          confirmation='Are you sure you want to send?'
          confirmButton='Send'
          rejectButton='Reject'
        />
      }
    </>
  )
}
