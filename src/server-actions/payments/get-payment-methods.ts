'use server'

import { moov } from "@/lib/moov/moov-client"
import { getUser } from "@/lib/auth/get-user"

export const getPaymentMethods = async () => {
  const user = await getUser()

  try {
    if(user) {
      const methods = await moov.cards.list(user.moovId)
      
      return methods
    }
  } catch(err) {
    return console.log(err)
  }
}
