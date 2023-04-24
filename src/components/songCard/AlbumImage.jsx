import React from 'react';
import  track from '../../images/track.png';


function AlbumImage({url}) {
  return (
<div className="album_img flex items-center relative z-[1]">
    {url?(
        <img src={url} alt='album'className='rounded-md w-full' style={{aspectRatio:'1'}} />  
        ):
        <img src={track} alt='album'className='rounded-md w-full' />
    }</div>
  )
}

export  {AlbumImage};