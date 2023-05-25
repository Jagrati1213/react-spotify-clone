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
            apiClient.get(`albums/${location?.state?.id}/tracks`).then(res => setAlbumsTracks(res.data.items)).catch((err)=>console.log(err));
        }
  },[albumTracks]);
  return (
    <div className='screen_container lg:w-[90%] md:w-10/12 w-full max-w-[100%] min-h-screen md:p-18 p-8 mx-auto overflow-y-scroll ml-auto md:ml-20 mt-12'>
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