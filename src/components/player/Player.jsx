import React, { useEffect, useState } from 'react';
import { Songcard } from '../songCard/Songcard';
import { Queue } from '../queue/Queue';
import { apiClient } from '../../spotify';
import { useLocation } from 'react-router';
import AudioPlayer from '../audiioPlayer/AudioPlayer';

function Player() {

    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTracks] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    // get all songs from playlist
    useEffect(()=>{
        if(location.state){
          apiClient.get("playlists/"+ location.state?.id+ "/tracks").then((res)=> {
              setTracks(res.data.items);
              setCurrentTracks(res.data.items[0].track);
            });
        }
    },[location.state]);

    // Change the player index while click
    useEffect(()=>{
      if(currentIndex){
        setCurrentTracks(tracks[currentIndex].track);
      }
    },[currentIndex,tracks]);

  return (
      <div className="player_screen h-full w-full max-w-screen flex justify-between flex-col overflow-y-scroll overflow-x-hidden">
        <Songcard album={currentTrack.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
        <AudioPlayer currentTrack = {currentTrack} />
      </div>
  )
}

export  {Player}