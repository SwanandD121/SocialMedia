import React from 'react'
import "./ProfileSide.css"
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'

const ProfileSide = () => {
  return (
    <div className='profileSide flex flex-col gap-1 items-center object-cover overflow-hidden'>
      <LogoSearch/>
      <ProfileCard/>
    </div>
  )
}

export default ProfileSide
