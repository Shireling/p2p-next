import './side-nav.css'
import Link from 'next/link'
import SignOutButton from '../form-elements/sign-out-button/sign-out-button'

const SideNav = () => {
  return (
    <nav>
      <div className='link-list'>
        <Link href='/'>
          <div className='nav-icon'></div>
        </Link>
        <Link href='/activity'>
          <div className='nav-icon'></div>
        </Link>
        <Link href='/my-account'>
          <div className='nav-icon'></div>
        </Link>
      </div>
      <div>
        <SignOutButton>
          <div className='nav-icon'></div>
        </SignOutButton>
      </div>
    </nav>
  )
}

export default SideNav
