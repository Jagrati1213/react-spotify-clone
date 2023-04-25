import React from 'react'

function AlbumInfo({album}) {
  
  const artists = [];

  album?.artists?.forEach((ele)=>{
    artists.push(ele.name);
  });

  return (
    <div className='mx-4'>
        <div className="album_name">
          <p className=' font-bold text-2xl md:text-4xl text-white'>{album?.name}</p>
        </div>
        <div className="album_info ">
          <p className='text-[#848484] text-base font-semibold my-2'>{`• ${album?.total_tracks} songs • ${artists.join(' , ')}`}</p>
        </div>
    </div>
  )
}

export  {AlbumInfo};