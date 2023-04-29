import React from 'react'
import Logo from '../../img/logo.png'
import { UilSearch } from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className='logoSearch flex gap-3 items-center overflow-hidden'>
      <img src={Logo} alt="" />
      <div className="Search flex bg-gray-100 rounded-lg p-1">
        <input type="text" placeholder='#Explore' className='bg-transparent border-none outline-none' />
        <div className="s-icon flex items-center justify-center rounded-md p-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:cursor-pointer">
            <UilSearch/>
       </div>
      </div>
      
    </div>
  )
}

export default LogoSearch
