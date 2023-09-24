import { Moov } from '@moovio/node'

export const moov = new Moov({
  accountID: process.env.MOOV_ACCOUNT_ID as string,
  publicKey: process.env.MOOV_PUBLIC_KEY as string,
  secretKey: process.env.MOOV_SECRET_KEY as string,
  domain: process.env.MOOV_DOMAIN as string
})
