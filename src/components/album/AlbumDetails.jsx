import React,{useState,useEffect} from 'react';
import { apiClient } from "../../spotify";
import { useLocation } from 'react-router';
import Track from '../tracks/Track';
import Loader from '../loader/Loader';

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
            albumTracks.length?
            (
                albumTracks.map((item,id)=> <Track tracks={item} key={id}/>)
            ):
            (
           <Loader/>
            )
        }
    </div>
  )
}

export  {AlbumDetails};