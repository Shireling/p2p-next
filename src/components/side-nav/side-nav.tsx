import './side-nav.css'
import Link from 'next/link'
import SignOutButton from '../sign-out-button/sign-out-button'

const SideNav = () => {
  return (
    <nav>
      <div className='link-list'>
        <Link href='/'>Send</Link>
        <Link href='/activity'>Activity</Link>
        <Link href='/my-account'>My account</Link>
      </div>
      <div>
        <SignOutButton>Sign out</SignOutButton>
      </div>
    </nav>
  )
}

export default SideNav
