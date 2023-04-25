import React from 'react';
import  track from '../../images/track.png';


function AlbumImage({ url }) {
  return (
<div className="album_img overflow-hidden flex">
    {url?(
        <img src={url} alt='album'className='rounded-md w-64 object-cover' />  
        ):
        <img src={track} alt='album'className='rounded-md w-64 object-cover' />

    }</div>
  )
}

export  {AlbumImage};