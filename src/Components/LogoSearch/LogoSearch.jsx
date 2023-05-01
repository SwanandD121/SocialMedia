import React from 'react'
import Logo from '../../img/logo.png'
import { UilSearch } from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className='logoSearch flex gap-3 items-center overflow-hidden'>
      <img src={Logo} alt="" className='w-12 h-12'/>
      <div className="Search flex bg-gray-100 rounded-lg p-1">
        <input type="text" placeholder='#Explore' className='bg-transparent border-none outline-none' />
        <div className="s-icon flex items-center justify-center rounded-md p-2 text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] shadow-md border-2 hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-white hover:to-white hover:text-[#297eff] hover:cursor-pointer">
            <UilSearch/>
       </div>
      </div>
      
    </div>
  )
}

export default LogoSearch

// text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2 hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-white hover:to-white hover:text-[#297eff] hover:cursor-pointer
