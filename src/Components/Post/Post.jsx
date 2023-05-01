import React from 'react'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const Post = ({data}) => {
  return (
    <div className="Post flex flex-col gap-3  bg-white/70 rounded-3xl p-5">

        <div className="detail flex flex-col ml-2">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>

        <img src={data.img} alt="" className="rounded-lg object-cover   max-h-fi" />


        <div className="postReact flex gap-4 hover:cursor-pointer ml-2 ">
            <img src={data.liked?Heart: NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>

        <span className="ml-2 text-sm"><b>{data.likes}</b> Likes </span>

    </div>
  )
}

export default Post
