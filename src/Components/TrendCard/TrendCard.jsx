import React from 'react'
import { TrendsData } from '../../Data/TrendsData'
import Share from '../../img/share.png'

const TrendCard = (data) => {
  return (
    <div className="TrendCard bg-white/70 rounded-3xl gap-1 p-5 items-center">

        <h3 className="font-bold text-center pb-2">Trends Today</h3>

        {TrendsData.map((trend) => {
            return (
                <div className="trend flex flex-col gap-1">
                    <span><b>#{trend.name}</b></span>
                    <span className='text-xs'>{trend.shares}K shares</span>
                    <span></span>
                    <hr className=''/>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard
