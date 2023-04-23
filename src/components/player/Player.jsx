import React, { useEffect, useState } from 'react';

import { apiClient } from '../../spotify';
import { useLocation } from 'react-router';

function Player() {

    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTracks] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        console.log(location.state);

        if(location.state){
            console.log('jaggu');
            apiClient.get("playlists/"+ location.state?.id+ "/tracks").then((res)=> console.log(res.data.items));
            // setCurrentTracks(res.data.items[0].track);
        }
    },[location.state]);
  return (
    <div className='screen_container container'>
      <div className="left_player_body">
 
      </div>
      <div className="right_player_body">
          {/* <SongCard/> */}
          {/* <Queue/> */}
      </div>
    </div>
  )
}

export  {Player}