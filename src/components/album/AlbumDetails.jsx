import React,{useState,useEffect} from 'react';
import { apiClient } from "../../spotify";
import { useLocation } from 'react-router';
import Track from '../tracks/Track';

function AlbumDetails() {

    const [albumTracks, setAlbumsTracks] = useState([]);
    // track the albums songs
    const location = useLocation();
    useEffect(()=>{
        if(location.state){
            apiClient.get(`albums/${location?.state?.id}/tracks`).then(res => setAlbumsTracks(res.data.items));
        }
  },[albumTracks]);
  return (
    <div className='screen_container w-full max-w-[1400px] h-full min-h-screen md:p-18 p-12 mx-auto  overflow-y-auto'>
        {
            albumTracks?
            (
                albumTracks.map((item,id)=> <Track tracks={item} key={id}/>)
            ):
            (
            <div className='screen_container w-full max-w-[1400px] h-full min-h-screen md:p-18 p-12 mx-auto  overflow-y-auto'>
                <h1 className='text-white text-2xl font-bold my-3 mx-auto'>No track found</h1>
            </div>
            )
        }
    </div>
  )
}

export  {AlbumDetails};