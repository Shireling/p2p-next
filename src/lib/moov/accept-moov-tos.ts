import { moov } from "./moov-client"
import { loadMoov } from '@moovio/moov-js';
import { SCOPES } from "@moovio/node"

const scopes = [SCOPES.ACCOUNTS_CREATE]

export const acceptMoovTos = async (accountID: string) => {
  try {
    const {token} = await moov.generateToken(scopes)
    const moovBrowser = await loadMoov(token)

    moovBrowser?.accounts.acceptTermsOfService({accountID})
  } catch(err) {
    console.log(err)
  }
}
