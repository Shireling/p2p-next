import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(req: Request, res: Response) {
  await prisma.user.create({
    data: {
      name: 'Rich',
      email: 'hello@prisma.com'
    }
  })
}
