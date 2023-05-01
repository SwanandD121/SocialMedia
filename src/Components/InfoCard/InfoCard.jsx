import React, { useState } from 'react'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false)

  return (

    <div className="InfoCard flex flex-col bg-white/70 rounded-3xl p-4 w-full items-center">
        <div className="InfoHead flex justify-between w-full font-bold">
            <h3 className='text-center w-full mb-3'>Your Info</h3>
            <UilPen className="hover:cursor-pointer" onClick={()=>setModalOpened(true)}/>
            
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />

        </div>

        <div className='flex flex-col w-full gap-2'>
            <hr />

            <div className="info flex justify-between items-center">
                <span className='font-bold'>Gear</span>
                <span className='text-sm'>Nikon D5600</span>
            </div>

            <hr />

            <div className="info flex justify-between items-center">
                <span className='font-bold'>Experience</span>
                <span className='text-sm'>1 year</span>
            </div>

            <hr />

            <div className="info flex justify-between items-center">
                <span className='font-bold'>Age</span>
                <span className='text-sm'>20</span>
            </div>

            <hr />

            <div className="info flex justify-between items-center">
                <span className='font-bold'>Achievements</span>
                <span className='text-sm'>2 Bird Surveys</span>
            </div>

            <hr />
        </div>

        <button className=' text-white bg-orange-500 shadow-md p-1.5 mt-2 rounded-lg border-2 hover:border-orange-500 hover:bg-inherit hover:text-orange-500 hover:cursor-pointer'>
            Logout
        </button>
    </div>
  )
}

export default InfoCard