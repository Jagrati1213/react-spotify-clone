import React, { useEffect, useState } from 'react';
import { apiClient } from "../../spotify";
import Track from '../tracks/Track';

function Toptrack() {

  const [tracks, setTracks]= useState([]);
  const [range,setRange] = useState('long_term');
  // const [activeRange, setActiveRange]= useState('long_term');

  const ChangeActiveRange = (rangeName) =>{
    setRange(rangeName);
  }
 
  useEffect(()=>{
    apiClient.get(`me/top/tracks?limit=50&time_range=${range}`).then((res)=> setTracks(res.data.items));

  },[range]);

  return (
    <main className='track_container w-full max-w-[1400px] h-full min-h-screen md:p-18 p-12 mx-auto overflow-y-auto'>
      {
        tracks.length?
        (
          <>        
          <header className='flex justify-between items-center'>
              <h1 className='text-white text-2xl font-bold my-3'>Top Tracks</h1>
              <div className='flex -mr-3 text-base font-semibold short_track'>
                <span className={`mx-3 cursor-pointer text-[#848484] hover:text-white`} onClick={()=> ChangeActiveRange('long_term')}>
                    All Time
                </span>
                <span className={`mx-3 cursor-pointer text-[#848484] hover:text-white`} onClick={()=> ChangeActiveRange('medium_term')}>
                      Last 6 Months
                </span>
                <span className={`mx-3 cursor-pointer text-[#848484] hover:text-white`} onClick={()=> ChangeActiveRange('short_term')}>
                      Last 4 Weeks
                </span>
              </div>
          </header>

          <ul className="recent_body w-full flex flex-col mt-10 pb-10">
            {/* Mapping recent tracks */}
            {tracks.map((item,id)=> <Track tracks={item} key={id}/>)}
          </ul>
          </>
        ):
        (<div className='screen_container w-full max-w-[1400px] h-full min-h-screen md:p-18 p-12 mx-auto  overflow-y-auto'>
              <h1 className='text-white text-2xl font-bold my-3 mx-auto'>No track found</h1>
          </div>
        )

      }
    </main>
  )
}

export default Toptrack;