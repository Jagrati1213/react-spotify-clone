import React from 'react';
import {BiErrorCircle} from "react-icons/bi";
import { IconContext } from 'react-icons';
import trackImg from '../../images/track.png';


function Track({tracks}) {
    
    // display accurate time
    const calculateTime = (milliseconds)=>{
    
        const seconds = Math.floor((milliseconds / 1000) % 60);
        const resultSec = seconds<10?`0${seconds}`:seconds;

        const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    return `${minutes}:${resultSec}`;
    }
  return ( 
        <li className='recent_card relative rounded-md grid text-white items-center mb-9 cursor-pointer w-full'style=   {{gridTemplateColumns: "auto 1fr"}}>
                        
                {/* Recent Image */}
                <div>
                    <div className='recent_img w-12 max-w-[50px] mr-5 relative cursor-pointer'>
                        {
                        tracks?.album?.images.length?
                        (<img src={tracks.album.images[0].url} alt="track_img"  className='w-full max-w-screen'/>):
                        (<img src={trackImg} alt="track_img"  className='w-full max-w-screen'/>)
                        }   
                        <div className="recent_icon flex justify-center items-center absolute w-full h-full bg-[#00000080] transition-all top-0">
                             <IconContext.Provider value={{size:'25px'}}><BiErrorCircle/></IconContext.Provider>
                         </div>
                     </div>
                </div>

                {/* Recent song */}
                <div className="grid gap-3" style={{gridTemplateColumns: "1fr max-content"}}>
                     <div className='recent_song overflow-hidden whitespace-nowrap pr-2' style={{textOverflow:'ellipsis'}}>
                         <span className='mb-1 hover:border-b-2 hover:border-b-white text-base'>{tracks?.name}</span>
                         <div className='text-sm text-[#848484] overflow-hidden whitespace-nowrap pr-2' style={{textOverflow:'ellipsis'}}>
                            <span>{tracks?.artists[0].name} &nbsp;•&nbsp; &nbsp;</span>
                            <span>{tracks?.album?.name}</span>
                        </div>  
                    </div>

                    <div className="recent_duration text-[#848484] text-sm">
                        <span>{calculateTime(Math.floor(tracks?.duration_ms))}</span>
                     </div>
                </div>
                        
        </li>
  )}
export default Track