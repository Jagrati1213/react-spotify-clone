import React, { useState,useRef, useEffect } from 'react'
import ProgressBar from './ProgressBar';
import img from '../../images/profile.png';
import { FaVolumeMute } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


function AudioPlayer({currentTrack,currentIndex, setCurrentIndex, total,audioName,isplaying }) {
   
    // console.log(audioName);

    const handleNext =()=>{

    }

    const handlePre =()=>{

    }

    return (
    <div className='AudioPlayer w-[95%] py-2 bg-zinc-950 absolute bottom-0 flex justify-between px-4 overflow-x-hidden'>
        
        {/* Song details */}
        <div className="player_left flex items-center w-[20%]">
             <div className='bg-zinc-800 w-10 h-10 rounded'>
               {
                currentTrack?.album?.images[0]?.url?(
                    <img src={currentTrack?.album?.images[0]?.url} alt="song_img" className='w-full h-full rounded object-cover'/>
                ): 
                <img src={img} alt="song_img" className='w-full h-full rounded object-cover'/>
               }
             </div>
             <p className='text-white text-xs mx-3'>{currentTrack?.name}</p>
        </div>

        {/* audio player */}
        <div className="player_center">
            <ProgressBar  handleNext={handleNext} handlePre={handlePre} audio={audioName}/>
        </div>

        {/* volume  */}
        <div className="player_right flex justify-center items-center">

            <IconContext.Provider value={{size:'18px',color:'#e2e8f0'}}>
                <FaVolumeMute className='mr-4'/>
            </IconContext.Provider>
            <input type='range' className='accent-slate-300 h-1 text-white'/>
        </div>
    </div>
  )
}

export default AudioPlayer