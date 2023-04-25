import React from 'react';
import { AlbumImage } from './AlbumImage';
import { AlbumInfo } from './AlbumInfo';

function Songcard({ album }) {
  return (
    <div className='songCard_body w-full py-8 bg-zinc-900 flex items-center flex-wrap px-8'>

      <AlbumImage url={album?.images[0]?.url}/>
      <AlbumInfo album={album}/>
    </div>
  )
}

export  {Songcard};