import SendMoneyForm from '@/components/send-money-form/send-money-form'
import { getUser } from '@/lib/auth/get-user'
import { moov } from '@/lib/moov/moov-client'
import { sendPayment } from '@/lib/send-payment'

export default async function SendMoney() {
  const user = await getUser()

  const getOptions = async () => {
    if(user) {
      const accountId = user.moovId
      const cards = await moov.cards.list(accountId)

      return cards
    }
  }

  return (
    <>
      <section>
        <h1>Welcome back, {user?.name.split(' ')[0]}!</h1>
        <SendMoneyForm sendPayment={sendPayment} options={getOptions()} />
      </section>
    </>
  )
}
