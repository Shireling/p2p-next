import './main.css'
import SideNav from "@/components/side-nav/side-nav"
import { getUserSession } from '@/lib/auth/get-user-session'
import { redirect } from "next/navigation"

export default async function MainLayout({children}: {children: React.ReactNode}) {
  const session = await getUserSession()
  !session && redirect('/login')

  return (
    <>
      <SideNav />
      <div className='big-view'>
        <div className='inner-view'>
          {children}
        </div>
      </div>
    </>
  )
}
