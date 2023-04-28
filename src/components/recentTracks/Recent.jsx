import React, { useEffect, useState } from 'react';
import { apiClient } from "../../spotify";
import Track from '../tracks/Track';

function Recent(){

   const [recentTracks, setRecentTracks] = useState([]);
   useEffect(()=>{
    apiClient.get('me/player/recently-played').then(res =>{
          setRecentTracks(res.data.items);
        });
   },[]);

  return (
    <div className='screen_container w-full max-w-[1400px] h-full min-h-screen md:p-18 p-12 mx-auto mb-10 overflow-y-auto'>
        {recentTracks.length?
            (<>
              <h1 className='text-white text-2xl font-bold mb-3 lg:mx-auto lg:text-left text-center'>Recently Played Tracks</h1>
            
              <ul className="recent_body w-full flex flex-col mt-10">
                {/* Mapping recent tracks */}
                {recentTracks.map((item,id)=> <Track tracks={item.track} key={id}/>)}
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