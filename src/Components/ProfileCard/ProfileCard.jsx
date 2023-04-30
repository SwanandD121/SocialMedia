import React from 'react'
import Cover from '../../img/cover-img.jpg'
import Profile from '../../img/profile-img.jpg'

const ProfileCard = () => {

  const ProfilePage = true;

  return (
    <div className="ProfileCard rounded-3xl flex flex-col relative overflow-x-clip bg-white/70">
        <div className="ProfileImages flex flex-col relative justify-center items-center ">
            <img src={Cover} alt="" className='w-full'/>
            <img src={Profile} alt="" className="w-24 absolute rounded-full border-2 border-gray shadow-md shadow-[0px_4px_17px_2px_rgba(0, 0, 0, 0.25)] bottom-[-3rem]" />
        </div>

        <div className="ProfileName flex flex-col mt-12 mb-1 items-center gap-1">
          <span className="font-bold">ShaazJung</span>
          <span>NatGeo Filmmaker</span>
        </div>

        <div className="followStatus flex flex-col items-center justify-center gap-1">
            <hr className='w-4/5 border-2 border-[#cfcdcd] m-1 rounded-sm'/>

            <div className='w-4/5 flex items-center gap-2 justify-around'>

              <div className="follow flex flex-col items-center gap-1">
                <span className='font-bold'>9,999</span>
                <span className='text-gray-500 text-sm'>Followers</span>
              </div>

              <div className="vl h-20 border-l-4 border-[#cfcdcd] m-1 rounded-sm"></div>

              <div className="follow flex flex-col items-center gap-1">
                <span className='font-bold'>1</span>
                <span className='text-gray-500 text-sm'>Following</span>
              </div>

              {ProfilePage && (
                <>
                
                <div className="vl h-20 border-l-4 border-[#cfcdcd] m-1 rounded-sm"></div>

                <div className="follow flex flex-col items-center gap-1">
                <span className='font-bold'>80</span>
                <span className='text-gray-500 text-sm'>Posts</span>
              </div>

                </>
              )}

            </div>

            <hr className='w-4/5 border-2 border-[#cfcdcd] m-1 rounded-sm '/>

        </div>
              
        {ProfilePage? '': <span className=' font-bold cursor-pointer hover:underline m-4 text-orange-500 self-center'>
          Visit Profile
        </span>}
        
    </div>
  )
}

export default ProfileCard
