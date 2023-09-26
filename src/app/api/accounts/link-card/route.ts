import { getUser } from "@/lib/auth/get-user"
import { moov } from "@/lib/moov/moov-client"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const user = await getUser()
  const {
    cardNumber, 
    expMonth, 
    expYear, 
    cvv, 
    holderName, 
    address1, 
    address2, 
    city, 
    state, 
    zip
  } = await req.json()  
  
  try {
    if(user) {
      const newCard = await moov.cards.link(user.moovId, {
        cardNumber,
        expiration: {
          month: expMonth,
          year: expYear
        },
        cardCvv: cvv,
        holderName,
        billingAddress: {
          addressLine1: address1,
          addressLine2: address2,
          city,
          stateOrProvince: state,
          postalCode: zip,
          country: "US"
        }
      })

      return NextResponse.json({status: 200, data: newCard})
    }
  } catch(err) {
    console.error(err)
  }
}
