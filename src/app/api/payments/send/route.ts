import { moov } from "@/lib/moov/moov-client"
import { PrismaClient } from "@prisma/client"
import { getUserSession } from "@/lib/auth/get-user-session"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function POST(req: Request, res: Response) {
  const session = await getUserSession()
  const senderId = session?.user.id
  const {recipient, amount} = await req.json()
  
  
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: recipient
      }
    })
  
    console.log(user)
  } catch(err) {
    console.error(err)
  }

  console.log('SENT', senderId)

  return NextResponse.json({status: 200})
  
}
