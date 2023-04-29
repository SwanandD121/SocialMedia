import React from 'react'
import './Home.css'
import ProfileSide from '../../Components/ProfileSide/ProfileSide'

const Home = () => {
  return (
    <div className="home relative gap-4"> {/* isme tailwind nahi chal raha */}
      <ProfileSide/>
      <div className="postSide">Posts Side</div>
      <div className="rightSide">Right Side</div>
    </div>
  )
}

export default Home
