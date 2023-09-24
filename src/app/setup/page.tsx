import { redirect } from "next/navigation"
import { getUser } from "@/lib/auth/get-user"
import SetupForm from "@/components/setup-form/setup-form"

export default async function Setup() {
  const user = await getUser()
  user?.moovId && redirect('/')

  return (
    <div>
      <h3>Continue account setup</h3>
      <SetupForm />
    </div>
  )
}
