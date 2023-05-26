import React,{useState,useEffect} from 'react';
import { apiClient } from "../../spotify";
import { useLocation, useParams } from 'react-router';
import Track from '../tracks/Track';
import Loader from '../loader/Loader';

function AlbumDetails() {

    const [albumTracks, setAlbumsTracks] = useState([]);
    const params = useParams();

    useEffect(()=>{   

        let controller = new AbortController();
        apiClient.get(`albums/${params.albumId}/tracks`)
        .then(res => {
            setAlbumsTracks(res.data.items);
            controller=null;

        })
        .catch((err)=> console.error(err));

        return () => controller?.abort();
  },[]);

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