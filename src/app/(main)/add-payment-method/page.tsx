'use client'

import './add-payment-method.css'
import { useState } from "react"
import AddCardForm from '@/components/forms/add-card-form/add-card-form'

export default function AddPaymentMethod() {
  const [tab, setTab] = useState('card')

  return (
    <div>
      <h1>LINK CREDIT/DEBIT CARD</h1>
      <AddCardForm />
    </div>
  )
}
