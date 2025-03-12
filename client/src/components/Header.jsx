import React from 'react'
import logo from '../assets/SUHLogo.png'

const Header = () => {
  return (
    <div className='flex justify-center'>
        <img className='h-auto max-w-xs' src={logo} alt="SUH Logo" />
    </div>
  )
}

export default Header
