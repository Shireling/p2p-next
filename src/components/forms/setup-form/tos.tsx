import './setup-form.css'
import Button from '@/components/form-elements/button/button'
import Link from 'next/link'

const Tos = () => {
  const handleAccept = async () => {

  }

  const handleDecline = () => {
    console.log('declined')
  }

  return (
    <>
      <h1>TERMS OF SERVICE</h1>
      <p className='p2'>
        We use Moov.io for handling all payment processing and wallet
        capabilities. Please agree to their terms of service to start using the
        app.
      </p>
      <Link href='https://moov.io/legal/platform-agreement/' target='_blank'>Terms of service</Link>
      <Button handleClick={handleAccept}>Agree</Button>
      <Button handleClick={handleDecline} hollow>Decline</Button>
    </>
  )
}

export default Tos
