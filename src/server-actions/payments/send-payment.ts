'use server'

import { moov } from "@/lib/moov/moov-client"
import { getUser } from "@/lib/auth/get-user"

export const sendPayment = async (source: string, destination: string, amount: number) => {
  const user = await getUser()

  try {
    if(user) {
      const formattedAmount = amount * 100
      const transfer = {
        source: { paymentMethodID: source },
        destination: { paymentMethodID: destination },
        amount: {
          value: formattedAmount,
          currency: "USD"
        },
        description: "P2P Payment"
      }

      const {transferID} = await moov.transfers.create(transfer)
    }
  } catch(err) {
    console.error(err)
  }
}
