// import { createMoovAccount } from "@/extra/create-moov-account"
import { Moov } from '@moovio/node'
import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'
import { getUserSession } from '@/lib/auth/get-user-session'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const moov = new Moov({
    accountID: process.env.MOOV_ACCOUNT_ID as string,
    publicKey: process.env.MOOV_PUBLIC_KEY as string,
    secretKey: process.env.MOOV_SECRET_KEY as string,
    domain: process.env.MOOV_DOMAIN as string
  })
  const {firstName, middleName, lastName, phone} = await req.json()
  const session = await getUserSession()
  const phoneString = phone  
  
  try {    
    const account = await moov.accounts.create({
      accountType: "individual",
      profile: {
        individual: {
          name: {
            firstName,
            middleName,
            lastName
          },
          email: "some@email.com",
          phone: {
            number: phoneString,
            countryCode: "1"
          }
        }
      }
    })

    const updateUser = await prisma.user.update({
      where: {
        id: session?.user.id
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
