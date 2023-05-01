import React, { useState } from 'react'
import Home from "../../img/home-filled.png";
import Noti from "../../img/bell-filled.png";
import Setting from "../../img/setting-filled.png";
import Dark from "../../img/dark-filled.png";
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';
// import TrendCard from "../TrendCard/TrendCard";
// import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {

  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="rightSide flex flex-col gap-6">
        <div className="navIcons flex h-8 items-center justify-around mt-5 hover:cursor-pointer">
            <img src={Home} alt="" className='w-[2.5rem] h-[2.5rem]'/>
            <img src={Noti} alt="" className='w-8 h-8'/>
            <img src={Setting} alt="" className='w-[2.2rem] h-[2.2rem]'/>
            <img src={Dark} alt="" className='w-8 h-8'/>
        </div>


        <TrendCard/>

        <button onClick={()=> setModalOpened(true)} className="text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2 hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-white hover:to-white hover:text-[#297eff] hover:cursor-pointer">
            Share an experience!
        </button>
        
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default RightSide
