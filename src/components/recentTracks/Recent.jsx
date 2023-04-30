import React, { useEffect, useState } from 'react';
import { apiClient } from "../../spotify";
import Track from '../tracks/Track';
import Loader from '../loader/Loader';

function Recent(){

   const [recentTracks, setRecentTracks] = useState([]);
   useEffect(()=>{
    apiClient.get('me/player/recently-played').then(res =>{
          setRecentTracks(res.data.items);
        });
   },[]);

  return (
    <div className='screen_container lg:w-[90%] md:w-10/12 w-full md:max-w-[100%] h-full min-h-screen md:p-18 p-8 pr-3 mx-auto mb-10 overflow-y-scroll ml-auto md:ml-20 mt-12'>
      <h1 className='text-white text-2xl font-bold mb-3 lg:mx-auto lg:text-left text-center'>Recently Played Tracks</h1>

        {recentTracks.length?
            (<>            
              <ul className="recent_body w-full flex flex-col mt-10">
                {/* Mapping recent tracks */}
                {recentTracks.map((item,id)=> <Track tracks={item.track} key={id}/>)}
              </ul>
              </>
            ):
            (
            <Loader/>
            )
        }
    </div>

  )
}
export default Recent;