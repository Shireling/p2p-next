"use server"

import { moov } from "@/lib/moov/moov-client"
import { getUser } from "@/lib/auth/get-user"
import { PrismaClient } from "@prisma/client"

interface Props {
  firstName: string
  lastName: string
  addressLineOne: string
  addressLineTwo: string
  city: string
  stateProv: string
  zip: string
  dob: string
  ssn: string
  phone: string
}

const prisma = new PrismaClient()

export const createMoovAccount = async ({
  firstName,
  lastName,
  addressLineOne,
  addressLineTwo,
  city,
  stateProv,
  zip,
  dob,
  ssn,
  phone,
}: Props) => {
  try {
    const user = await getUser()
    const account = await moov.accounts.create({
      accountType: "individual",
      profile: {
        individual: {
          name: {
            firstName,
            lastName
          },
          email: user?.email,
          phone: {
            number: phone,
            countryCode: '1'
          },
          address: {
            addressLine1: addressLineOne,
            addressLine2: addressLineTwo,
            city,
            stateOrProvidence: stateProv,
            postalCode: zip,
            country: 'US'
          },
          birthDateProvided: true,
          governmentIDProvided: true
        }
      }
    } as any)

    const updateUser = await prisma.user.update({
      where: {
        id: user?.id
      },
      data: {
        moovId: account.accountID,
        address_line_1: addressLineOne,
        address_line_2: addressLineTwo,
        city,
        state: stateProv,
        zip,
        phone
      }
    })
  } catch (err) {
    console.error(err)
  }
}
