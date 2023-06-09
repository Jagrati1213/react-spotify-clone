import React, { useEffect, useState } from 'react';
import { apiClient } from "../../spotify";
import Track from '../tracks/Track';
import Loader from '../loader/Loader';
import { useParams } from 'react-router';

function PlaylistDetails() {

  const[listDetails,setListDetails] = useState([]);
  const params = useParams();
  useEffect(()=>{

      let controller = new AbortController();
      apiClient.get(`playlists/${params.productId}`)
      .then(res => {
        setListDetails(res.data)
        controller=null;
      })
      .catch((err)=> console.error(err));
  },[]);

  return (
    <main className='playlist_d_container lg:w-[90%] md:w-10/12 w-full md:max-w-[100%] h-full min-h-screen md:p-18 p-8 mx-auto ml-0 md:ml-20 overflow-y-scroll flex flex-col lg:flex-row items-start mt-12'>
    {
      listDetails?.tracks?.items.length?
      (
        <>        
        <div className='flex justify-between items-center w-full lg:w-4/12 mt-10 lg:mx-auto flex-col'>
            <div className="playlist_img lg:block hidden w-full max-w-xs">
                <img src={listDetails?.images[0].url} alt="playlist_img" className='w-full object-cover'/>
            </div>
            <a href={listDetails?.external_urls?.spotify} target='_blank' rel="noopener noreferrer" className='my-4 text-t_white text-center font-bold text-xl'>
                <h3>{listDetails?.name}</h3>
            </a>
            <p className='text-[#848484] text-sm font-semibold'>By {listDetails?.owner?.display_name}</p>
            <p className='text-t_white my-6 text-[14px]'>{listDetails?.tracks?.total} Tracks</p>
        </div>

        <ul className="recent_body w-full flex flex-col my-10 pb-10 lg:ml-12">
          {/* Mapping recent tracks */}
          {listDetails.tracks.items.map((item,id)=> <Track tracks={item.track} key={id}/>)}
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

export default PlaylistDetails;