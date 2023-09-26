'use client'

import { useState } from "react"
import ConfirmationModal from '@/components/confirmation-modal/confirmation-modal'
import { useModal } from '@/hooks/use-modal'
import Link from 'next/link'
import { sendPayment } from "@/lib/send-payment"

interface Props {
  sendPayment: (recipient: string, amount: number) => void
}

const SendMoneyForm = ({sendPayment, options}: Props) => {
  const [cards, setCards] = useState()
  const [amount, setAmount] = useState(0)
  const [method, setMethod] = useState('')
  const [recipient, setRecipient] = useState('')
  const confirmationModal = useModal()

  const paymentOptions = async () => {
    const cards = await options()
    setCards(cards)
  }


  return (
    <>
      <div className='row-item'>
        <p>Send to</p>
        <input type='email' placeholder="Recipient's email" required onChange={(e) => setRecipient(e.target.value)} />
      </div>
      <div className='row-item'>
        <p>Payment method</p>
        {
          cards ? (
            <select onChange={e => setMethod(e.target.value)}>
              {cards.map(op => <option key={op.id} value={op.id}>{op.value}</option>)}
            </select>
          ) :
          (
            <div>
              <Link href='/add-payment-method'>Add payment method</Link>
            </div>
          )
        }
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
      {
        confirmationModal.show && <ConfirmationModal 
          prompt={`You are about to send $${amount} to ${recipient} from you payment method ${method}`}
          confirmation='Are you sure you want to send?'
          confirmButton='Send'
          rejectButton='Reject'
          handleAccept={() => sendPayment(recipient, amount)}
        />
      }
    </>
  )
}

export default SendMoneyForm
