"use client"

import { useState, useEffect } from "react"
import ConfirmationModal from "@/components/confirmation-modal/confirmation-modal"
import { useModal } from "@/hooks/use-modal"
import Link from "next/link"
import { sendPayment } from "@/server-actions/payments/send-payment"
import TextInput from "../../form-elements/text-input/text-input"
import SelectDropdown from "../../form-elements/select-dropdown/select-dropdown"
import CurrencyInput from "../../form-elements/currency-input/currency-input"
import Button from "@/components/form-elements/button/button"

interface Props {
  sendPayment: (recipient: string, amount: number) => void
  paymentMethods: any
}

const SendMoneyForm = ({ sendPayment, paymentMethods }: Props) => {
  const [amount, setAmount] = useState(0)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethods[0]
  )
  const [recipient, setRecipient] = useState("")
  const confirmationModal = useModal()

  return (
    <>
      <div className="row-item">
        <p>Send to</p>
        <TextInput
          inputType="email"
          placeholder="Recipient's email"
          value={recipient}
          required
          handleChange={(e) => setRecipient(e.target.value)}
        />
      </div>
      <div className="row-item">
        <p>Payment method</p>
        {paymentMethods.length > 0 ? (
          <SelectDropdown
            value={selectedPaymentMethod}
            handleChange={(e) =>
              setSelectedPaymentMethod(paymentMethods[e.target.value])
            }
          >
            {paymentMethods.map((op: any, i: number) => (
              <option key={i} value={i}>
                {op.brand} x{op.lastFourCardNumber}
              </option>
            ))}
          </SelectDropdown>
        ) : (
          <div>
            <Link href="/add-payment-method">Add payment method</Link>
          </div>
        )}
      </div>
      <div className="row-item">
        <p>How much?</p>
        <CurrencyInput
          currency="$"
          value={amount}
          required
          handleChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div className="row-item no-border">
        <Button handleClick={() => confirmationModal.set(true)}>Send</Button>
      </div>
      {confirmationModal.show && (
        <ConfirmationModal
          prompt={`You are about to send $${amount} to ${recipient} from your card ending in ${selectedPaymentMethod.lastFourCardNumber}`}
          confirmation="Are you sure you want to send?"
          confirmButton="Send"
          rejectButton="Reject"
          handleAccept={() => sendPayment(recipient, amount)}
        />
      )}
    </>
  )
}

export default SendMoneyForm
