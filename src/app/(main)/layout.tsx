import './main.css'
import SideNav from "@/components/side-nav/side-nav"
import { getUser } from '@/lib/auth/get-user'
import { getUserSession } from '@/lib/auth/get-user-session'
import { redirect } from "next/navigation"

export default async function MainLayout({children}: {children: React.ReactNode}) {
  const session = await getUserSession()
  !session && redirect('/login')
  
  const user = await getUser()  
  !user?.moovId && redirect('/setup')

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
