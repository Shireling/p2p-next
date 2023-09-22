import { getServerSession } from "next-auth"

export const getUserSession = async () => {
  const session = await getServerSession()

  !session && undefined

  return session
}
