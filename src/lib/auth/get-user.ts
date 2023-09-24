import { PrismaClient } from "@prisma/client"
import { getUserSession } from '@/lib/auth/get-user-session'

const prisma = new PrismaClient()

export const getUser = async () => {
  const session = await getUserSession()

  const user = prisma.user.findUnique({
    where: {
      id: session?.user.id
    }
  })
  
  return user
}
