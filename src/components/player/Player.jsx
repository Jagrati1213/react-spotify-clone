import React, { useEffect, useState } from 'react';
import { Songcard } from '../songCard/Songcard';
import { Queue } from '../queue/Queue';
import { apiClient } from '../../spotify';
import { useLocation } from 'react-router';

function Player() {

    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTracks] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{

        if(location.state){
          // get all songs from playlist
          apiClient.get("playlists/"+ location.state?.id+ "/tracks").then((res)=> {
              setTracks(res.data.items);
              setCurrentTracks(res.data.items[0].track);
            });
        }
    },[location.state]);
  return (
    <div className='screen_container w-full flex'>
      <div className="left_player_body mr-2 h-full bg-red-500 w-[80%]">
 
      </div>
      <div className="right_player_body h-full bg-green-500 w-[20%] min-w-[64px] flex justify-between flex-col">
          <Songcard album={currentTrack.album} />
          <Queue/>
      </div>
    </div>
  )
}

export  {Player}