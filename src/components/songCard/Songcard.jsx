import React from 'react';
import { AlbumImage } from './AlbumImage';
import { AlbumInfo } from './AlbumInfo';

function Songcard({album}) {
  return (
    <section className='songCard_body w-full h-3/5 bg-green-300 rounded-3xl rounded-br-none rounded-e-none flex justify-center items-center flex-col'>
       <AlbumImage url={album?.images[0]?.url}/>
       <AlbumInfo/>
    </section>
  )
}

export  {Songcard};