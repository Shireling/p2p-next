// import { createMoovAccount } from "@/extra/create-moov-account"
import { Moov } from '@moovio/node'
import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'
import { getUserSession } from '@/lib/auth/get-user-session'
import { getUser } from '@/lib/auth/get-user'
import { moov } from '@/lib/moov/moov-client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const user = await getUser()
  const firstName = user?.name.split(' ')[0]
  const lastName = user?.name.split(' ')[1]
  
  try {    
    const account = await moov.accounts.create({
      accountType: "individual",
      profile: {
        individual: {
          name: {
            firstName,
            lastName
          },
          email: user?.email
        }
      }
    } as any)

    const updateUser = await prisma.user.update({
      where: {
        id: user?.id
      },
      data: {
        moovId: account.accountID
      }
    })

    return NextResponse.json({status: 200, data: {account, updateUser}})
  } catch(err) {
    console.error(err)
    return NextResponse.json({status: 200, body: err})
  }
}
