import { moov } from "@/lib/moov/moov-client"
import { getUser } from "@/lib/auth/get-user"
import { NextResponse } from "next/server"

export async function GET() {
  const user = await getUser()

  try {
    if(user) {
      const methods = await moov.cards.list(user.moovId)

      console.log(methods);
      
      // return NextResponse.json({methods})
    }
  } catch(err) {
    return NextResponse.json({status: 500, err})
  }
}
