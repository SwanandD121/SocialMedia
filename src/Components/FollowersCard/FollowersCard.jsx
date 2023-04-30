import React from 'react'
import { Followers } from '../../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className="FollowersCard w-full p-5  rounded-3xl  flex flex-col gap-2 text-xs bg-white/70">
        <h3 className='self-center font-bold text-base mb-2'>Your Followers</h3>

        {Followers.map((follower, id) =>{
            return (
                <div className="follower flex items-center justify-between">
                    <div className='flex items-center gap-3'>
                        <img src={follower.img} alt="" className='followerImg rounded-full w-12 h-12 border-2 border-orange-500' />
                        <div className="name flex flex-col gap-1">
                            <span className='font-bold'>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='text-white bg-orange-500 shadow-md p-1.5 rounded-lg border-2 hover:border-orange-500 hover:bg-inherit hover:text-orange-500 hover:cursor-pointer'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard
