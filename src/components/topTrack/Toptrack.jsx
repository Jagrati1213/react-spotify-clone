import React, { useEffect, useState } from 'react';
import { apiClient } from "../../spotify";
import Track from '../tracks/Track';
import Loader from '../loader/Loader';
import '../../style/Toptrack.css';

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
    <main className='track_container lg:w-[90%] md:w-10/12 w-full md:max-w-[100%] h-full min-h-screen md:p-18 p-8 pr-3 mx-auto mb-10 overflow-y-scroll ml-auto md:ml-20 mt-12'>
      <header className='flex justify-between items-center lg:flex-row flex-col'>
          <h1 className='text-white text-2xl font-bold my-3'>Top Tracks</h1>
          <div className='flex lg:justify-normal justify-between -mr-3 text-base font-semibold short_track'>
            <span className={`mx-3 cursor-pointer text-[#848484] hover:text-white md:text-base text-sm`} onClick={()=> ChangeActiveRange('long_term')}>
                    All Time
            </span>
            <span className={`mx-3 cursor-pointer text-[#848484] hover:text-white md:text-base text-sm`} onClick={()=> ChangeActiveRange('medium_term')}>
                      Last 6 Months
            </span>
            <span className={`mx-3 cursor-pointer text-[#848484] hover:text-white md:text-base text-sm`} onClick={()=> ChangeActiveRange('short_term')}>
                      Last 4 Weeks
            </span>
          </div>
      </header>
      {
        tracks.length?
        (
          <>        
          <ul className="recent_body w-full flex flex-col mt-10 pb-10">
            {/* Mapping recent tracks */}
            {tracks.map((item,id)=> <Track tracks={item} key={id}/>)}
          </ul>
          </>
        ):
        (
        <Loader/>
        )

      }
    </main>
  )
}

export default Toptrack;