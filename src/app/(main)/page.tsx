import SendMoneyForm from '@/components/forms/send-money-form/send-money-form'
import { getUser } from '@/lib/auth/get-user'
import { sendPayment } from '@/server-actions/payments/send-payment'
import { getPaymentMethods } from '@/server-actions/payments/get-payment-methods'

export default async function SendMoney() {
  const user = await getUser()
  const paymentMethods = await getPaymentMethods()  

  return (
    <section>
      <h1>SEND MONEY</h1>
      <SendMoneyForm sendPayment={sendPayment} paymentMethods={paymentMethods} />
    </section>
  )
}
