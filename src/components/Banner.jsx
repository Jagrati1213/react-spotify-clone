import React from 'react';
import Artist from "../images/artist.jpg";
import Check from "../images/check.png";
import {FaEllipsisH, FaHeadphones,FaCheck } from "react-icons/fa";

function Banner() {
  return (
    <div className='banner h-80 relative'>
        {/* banner-img */}
        <img src= {Artist} alt="albumImg" className='bannerImg absolute top-0 left-0 w-full h-full object-cover grayscale'/>

        {/* Content of album */}
        <div className="content absolute w-full top-0 left-0 ring-0 bottom-0 py-5 px-8 flex flex-col z-[3]">
            
            {/* BreadCamp */}
             <div className="breadCamp flex justify-between items-center">
                <p className='text-[#848484] text-sm font-semibold' style={{letterSpacing:'1px'}}>
                    smaple <span className='text-white'>/popular Artist</span></p>
                <i className='text-white text-xl cursor-pointer'><FaEllipsisH/></i>
             </div>

            {/* Artist Container */}
             <div className="artist mt-auto text-white flex justify-between items-center">
                 
                 {/* Name of artist */}
                <div className="left">

                     <div className="name flex items-center">
                        <h2 className='font-bold text-[50px]'>A-Ha</h2>
                        <img src={Check} alt='check-img' className='w-8 ml-3' />
                     </div>

                     <p className='text-sm flex items-center'>
                        <i className='mr-2'><FaHeadphones/></i>
                        11,184,1811 <span className='text-[#848484] ml-1'>Monthly listeners</span>
                     </p>
                </div>

                {/* Social & Play-pause */}
                <div className="right flex items-center">

                     <a href="#" className='flex items-center py-2 px-8 text-base text-white mr-4 rounded-full bg-green-600 font-bold text-center hover:shadow hover:shadow-green-400 '>Play</a>

                     <a href="#" className='flex items-center py-2 px-8 text-base text-white ml-4 rounded-full bg-[#010101ba] font-bold text-center border-[1px] border-[#ffffff1a] hover:shadow-lg hover:shadow-[#00000066]'>
                        <i className='mr-3 text-sm'><FaCheck/></i> Following
                    </a>
                </div>

             </div>

        </div>

        {/* Effect on bg */}
        <div className="bottomLayer absolute bottom-0 left-0 w-full h-20 " style={{backgroundImage:'linear-gradient(transparent, rgba(0,0,0,0.9))'}}></div>
    </div>
  )
}

export default Banner;