import SendMoneyForm from '@/components/send-money-form/send-money-form'
import { getUser } from '@/lib/auth/get-user'
import { sendPayment } from '@/lib/send-payment'
import { getPaymentMethods } from '@/lib/get-payment-methods'

export default async function SendMoney() {
  const user = await getUser()
  const paymentMethods = await getPaymentMethods()  

  return (
    <>
      <section>
        <h1>Welcome back, {user?.name.split(' ')[0]}!</h1>
        <SendMoneyForm sendPayment={sendPayment} paymentMethods={paymentMethods} />
      </section>
    </>
  )
}
