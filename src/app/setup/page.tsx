import './setup.css'
import { redirect } from "next/navigation"
import { getUser } from "@/lib/auth/get-user"
import SetupFlow from '@/components/setup-flow/setup-flow'

export default async function Setup() {
  const user = await getUser()
  user?.moovId && redirect('/')

  return (
    <div className='initial-views-container'>
      <SetupFlow />
    </div>
  )
}
