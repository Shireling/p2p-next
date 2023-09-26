'use client'

import './add-payment-method.css'
import { useState } from "react"
import AddCardForm from '@/components/add-card-form/add-card-form'

export default function AddPaymentMethod() {
  const [tab, setTab] = useState('card')

  return (
    <div>
      <h3>Add new payment method</h3>
      <div className='tabs-menu'>
        <div id='add-card' className='tab' onClick={() => setTab('card')}>
          <h5>Credit/debit card</h5>
        </div>
        <div id='add-bank' className='tab' onClick={() => setTab('bank')}>
          <h5>Bank account</h5>
        </div>
      </div>
      <div className='add-method-content'>
        {tab === 'card' && <AddCardForm />}
      </div>
    </div>
  )
}
