import React from 'react';
import { BsVolumeUpFill,BsMusicNoteList } from "react-icons/bs";
import {FaDesktop  } from "react-icons/fa";
import TrackImg from "../images/track.png";

function TrackList() {
  return (
    <div className='trackContainer border-t-[1px] border-[#848484] pt-5 hidden md:block'>

        {/* Image & name of song */}
        <div className="top flex items-center">
             <img className='w-12' src={TrackImg} alt="song-img" />
             <p className='trackName ml-3 text-white text-[14px]'>sample name 
             <span className='trackArt block text-xs text-[#848484]'>artist name</span></p>
        </div>

        {/* track the music */}
        <div className="bottom flex items-center justify-between mt-5 text-[#848484]">
            <i className='text-[18px] hover:text-white cursor-pointer' id='musicVolume'><BsVolumeUpFill/>
            </i>
            <input className='cursor-pointer relative h-1 border-none outline-none rounded-md  accent-green-500' type="range" id='musicRange'/>
            <i className='text-[18px] hover:text-white cursor-pointer'><BsMusicNoteList/>
            </i>
            <i className='text-[18px] hover:text-white cursor-pointer'><FaDesktop/>
            </i>
        </div>
    </div>
  )
}

export  {TrackList};