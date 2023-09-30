import './setup.css'
import { redirect } from "next/navigation"
import { getUser } from "@/lib/auth/get-user"
import SetupForm from "@/components/forms/setup-form/setup-form"

export default async function Setup() {
  const user = await getUser()
  user?.moovId && redirect('/')

  return (
    <div className='initial-views-container'>
      <h1>REGULATION STUFF</h1>
      <SetupForm />
    </div>
  )
}
