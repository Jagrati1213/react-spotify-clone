import React, { useEffect, useState } from 'react';
import { apiClient } from "../../spotify";
import {BiErrorCircle} from "react-icons/bi";
import { IconContext } from 'react-icons';

function Recent(){

   const [recentTracks, setRecentTracks] = useState([]);

   // display accurate time
    const calculateTime = (milliseconds)=>{
    
        const seconds = Math.floor((milliseconds / 1000) % 60);
        const resultSec = seconds<10?`0${seconds}`:seconds;

        const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    
        return `${minutes}:${resultSec}`;
    }
   
   useEffect(()=>{
    apiClient.get('me/player/recently-played').then(res =>{
          setRecentTracks(res.data.items);
        });
   },[]);

  return (
        <div className='screen_container w-full max-w-[1400px] h-full min-h-screen md:p-18 p-12 mx-auto overflow-y-auto'>
        {recentTracks.length?
            (<>
              <h1 className='text-white text-2xl font-bold my-3 mx-auto'>Recently Played Tracks</h1>
            
              <ul className="recent_body w-full h-full flex flex-col mt-10">
                  {/* Mapping recent tracks */}
                      {recentTracks.map((item,id)=>{
                          return <li className='recent_card relative rounded-md grid text-white items-center mb-9 cursor-pointer w-full' key={id} style=   {{gridTemplateColumns: "auto 1fr"}}>
                                   
                                   {/* Recent Image */}
                                    <div>
                                        <div className='recent_img w-12 max-w-[50px] mr-5 relative cursor-pointer'>
                                            <img src={item.track.album.images[0].url} alt="track_img"  className='w-full max-w-screen'/>
                                            <div className="recent_icon flex justify-center items-center absolute w-full h-full bg-[#00000080] transition-all top-0">
                                                <IconContext.Provider value={{size:'25px'}}><BiErrorCircle/></IconContext.Provider>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Recent song */}
                                    <div className="grid gap-3" style={{gridTemplateColumns: "1fr max-content"}}>
                                        <div className='recent_song overflow-hidden whitespace-nowrap pr-2' style={{textOverflow:'ellipsis'}}>
                                            <span className='mb-1 hover:border-b-2 hover:border-b-white text-base'>{item.track.name}</span>
                                            <div className='text-sm text-[#848484] overflow-hidden whitespace-nowrap pr-2' style={{textOverflow:'ellipsis'}}>
                                                  <span>{item.track.artists[0].name} &nbsp;•&nbsp; &nbsp;</span>
                                                  <span>{item.track.album.name}</span>
                                             </div>  
                                        </div>

                                        <div className="recent_duration text-[#848484] text-sm">
                                          <span>{calculateTime(Math.floor(item.track.duration_ms))}</span>
                                        </div>
                                    </div>
                                    
                          </li>
                          })
                  }
              </ul>
              </>
            ):
            (<div className='screen_container w-full max-w-[1400px] h-full min-h-screen md:p-18 p-12 mx-auto  overflow-y-auto'>
                <h1 className='text-white text-2xl font-bold my-3 mx-auto'>No track found</h1>
             </div>
            )
        }
    </div>

  )
}
export default Recent;