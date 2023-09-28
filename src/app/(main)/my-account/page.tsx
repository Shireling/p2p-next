import ActionableList from "@/components/actionable-list/actionable-list"
import Link from "next/link"
import './my-account.css'
import { getPaymentMethods } from "@/server-actions/payments/get-payment-methods"

const DUMMY_DATA = [
  {left: 'Left', right: 'Right', id: '456'}
]

export default async function MyAccount() {
  const paymentMethods = await getPaymentMethods()
  const paymentMethodList = paymentMethods?.map(item => {
    return {left: 'Card', right: `${item.brand + ' x' + item.lastFourCardNumber}`, id: item.cardID}
  })

  const handleDeletePaymentMethod = async (paymentId: string) => {
    'use server'
    console.log(paymentId)
  }

  return (
    <section className='spaced-sections'>
      <h1>ACCOUNT</h1>
      <div>
        <h2>Account ID</h2>
        <p>52gbdh8i14-f52d21h7i5p-4df5s4d5gf</p>
      </div>
      <div>
        <h2>Payment Methods</h2>
        <div>
          <ActionableList dataList={paymentMethodList} action={handleDeletePaymentMethod} actionBgColor="#F46060" />
          <Link href='/add-payment-method' className='underlined'>Add new payment method</Link>
        </div>
      </div>
    </section>
  )
}
