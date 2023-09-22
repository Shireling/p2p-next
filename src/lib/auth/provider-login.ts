import { signIn } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function providerLogin() {
  // await signIn()

  await prisma.user.create({
    data: {
      name: 'Rich',
      email: 'hello@prisma.com'
    }
  })
}
