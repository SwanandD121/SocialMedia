import React, { useState } from 'react'
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';
// import TrendCard from "../TrendCard/TrendCard";
// import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {

  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="rightSide flex flex-col gap-6">
        <div className="navIcons flex h-8  justify-around mt-5 hover:cursor-pointer">
            <img src={Home} alt="" />
            <UilSetting className=""/>
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
        </div>


        <TrendCard/>

        <button onClick={()=> setModalOpened(true)} className="text-white  bg-orange-500 shadow-md p-2 rounded-lg border-2 hover:border-orange-500 hover:bg-inherit hover:text-orange-500 hover:cursor-pointer">
            Share an experience!
        </button>
        
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default RightSide
