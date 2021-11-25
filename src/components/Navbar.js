import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalContext} from "../pages/App";

const Navbar = () => {
  const {signedIn,setSignedIn} = useContext(GlobalContext)

  const signOut = ()=>{
    setSignedIn(false)
    window.localStorage.removeItem('token')
  }
  const signInUp =
    <>
      <Link to='/signin'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
        Sign In
      </Link>
      <Link to='/signup'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
        Sign Up
      </Link>
    </>
  const profileSignOut =
    <>
      <Link to='/profile'
            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
        Profile
      </Link>
      <button
        className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
        onClick={signOut}
      >
        Sign Out
      </button>
    </>
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <Link to='/'
                className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>GR-RESQ</Link>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button type='button'
                    className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    aria-controls='mobile-menu' aria-expanded='false'>
              <span className='sr-only'>Open main menu</span>
              <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
                   stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'/>
              </svg>
              <svg className='hidden h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
                   stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'/>
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <Link to='#' className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                      aria-current='page'>highlighted</Link>
                <Link to='/tool'
                      className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Tool</Link>
              </div>
            </div>
          </div>
          <div>
            {signedIn && profileSignOut}
            {signedIn || signInUp}
          </div>
        </div>
      </div>

      <div className='sm:hidden' id='mobile-menu'>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <a href='#' className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
             aria-current='page'>Dashboard</a>
          <a href='#'
             className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Tool</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar