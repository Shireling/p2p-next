'use client'

import ConfirmationModal from '@/components/confirmation-modal/confirmation-modal'
import { useState } from 'react'
import { useModal } from '@/hooks/use-modal'
import { useSession } from 'next-auth/react'

export default function SendMoney() {
  const [amount, setAmount] = useState(0)
  const [recipient, setRecipient] = useState('')

  const {data: session} = useSession()
  const confirmationModal = useModal()

  const username = session?.user.name.split(' ')[0]

  const sendPayment = async (recipient: string, amount: number) => {
    confirmationModal.set(false)

    try {
      const res = await fetch('/api/payments/send', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({recipient, amount})
      })      
    } catch(err) {
      console.error(err)
    }
  }

  const handleCreateMoov = async () => {
    const res = await fetch('/api/accounts/create-moov-account', {method: 'POST'})
  }

  return (
    <>
      <section>
        <h1>Welcome back, {username}!</h1>
        <div className='row-item'>
          <p>Send to</p>
          <input type='email' placeholder="Recipient's email" required onChange={(e) => setRecipient(e.target.value)} />
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
          <button onClick={handleCreateMoov}>Create Moov</button>
        </div>
      </section>
      {
        confirmationModal.show && <ConfirmationModal 
          prompt={`You are about to send $${amount} to ${recipient}`}
          confirmation='Are you sure you want to send?'
          confirmButton='Send'
          rejectButton='Reject'
          handleAccept={() => sendPayment(recipient, amount)}
        />
      }
    </>
  )
}
