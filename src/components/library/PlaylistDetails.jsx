import React, { useEffect, useState } from 'react';
import { apiClient } from "../../spotify";
import { useLocation } from 'react-router';
import Track from '../tracks/Track';

function PlaylistDetails() {

    const[listDetails,setListDetails] = useState([]);
    const location = useLocation();

    useEffect(()=>{
          if(location.state){
            apiClient.get("playlists/"+ location.state?.id).then((res)=> {setListDetails(res.data)});
          }
    },[listDetails]);

  return (
    <main className='playlist_d_container lg:w-[90%] md:w-10/12 w-full md:max-w-[100%] h-full min-h-screen md:p-18 p-8 mx-auto ml-0 md:ml-20 overflow-y-scroll flex flex-col lg:flex-row items-start'>
    {
      listDetails?.tracks?.items.length?
      (
        <>        
        <div className='flex justify-between items-center w-full lg:w-4/12 mt-10 lg:mx-auto flex-col'>
            <div className="playlist_img lg:block hidden w-full max-w-xs">
                <img src={listDetails?.images[0].url} alt="playlist_img" className='w-full object-cover'/>
            </div>
            <a href={listDetails?.external_urls?.spotify} target='_blank' rel="noopener noreferrer" className='my-4 text-white text-center font-bold text-xl'>
                <h3>{listDetails?.name}</h3>
            </a>
            <p className='text-[#848484] text-sm font-semibold'>By {listDetails?.owner?.display_name}</p>
            <p className='text-white my-6 text-[14px]'>{listDetails?.tracks?.total} Tracks</p>
            <button className='bg-green-600 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-green-500'>Get Recommendation</button>
        </div>

        <ul className="recent_body w-full flex flex-col my-10 pb-10 lg:ml-12">
          {/* Mapping recent tracks */}
          {listDetails.tracks.items.map((item,id)=> <Track tracks={item.track} key={id}/>)}
        </ul>
        </>
      ):
      (
      <div className='screen_container w-full max-w-[1400px] h-full min-h-screen md:p-18 p-12 mx-auto  overflow-y-auto'>
            <h1 className='text-white text-2xl font-bold my-3 mx-auto'>No track found</h1>
        </div>
      )

    }
  </main>
  )
}

export default PlaylistDetails;