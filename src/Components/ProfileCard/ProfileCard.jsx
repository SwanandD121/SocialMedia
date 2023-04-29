import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'

const ProfileCard = () => {
  return (
    <div className="ProfileCard rounded-md flex flex-col relative overflow-x-clip bg-[rgba(255, 255, 255, 0.64)]">
        <div className="ProfileImages flex flex-col relative justify-center align-left">
            <img src={Cover} alt="" className='w-full'/>
            <img src={Profile} alt="" className='w-24 absolute rounded-full' />
        </div>
    </div>
  )
}

export default ProfileCard

// SD Birder
