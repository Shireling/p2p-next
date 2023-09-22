import './auth.css'
import { getUserSession } from '@/lib/auth/get-user-session'
import { redirect } from "next/navigation"

export default async function AuthLayout({children}: {children: React.ReactNode}) {
  const session = await getUserSession()
  session && redirect('/')

  return (
    <section>
      {children}
    </section>
  )
}
