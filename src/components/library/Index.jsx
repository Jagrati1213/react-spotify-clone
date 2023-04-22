import React, { useEffect, useState } from 'react'
import { apiClient } from '../../spotify';
import {FaMusic} from 'react-icons/fa';

function Index() {
    
  const [playList,setPlayList] = useState([]);
   useEffect(()=>{

    apiClient.get('me/playlists').then(res => setPlayList(res.data.items));
    
   },[]);

  return (
    <div className='screen_container w-full max-w-[1400px] h-full min-h-screen bg-gray-400 md:p-20 p-12 mx-auto  overflow-y-auto'>
       <h1 className='text-white text-2xl font-bold my-5 mx-auto'>Your PlayList</h1>

       <div className="library_body w-full h-full grid gap-7 flex-wrap justify-between" style={{gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"}}>
       {
           playList.map((item,idx)=>{
              return <div className='playlist_card rounded-md bg-slate-950 text-white' key={idx}>
               {
                item.images.length ?(
                  <img src={item.images[0].url} alt="playlist" />
                ):(
                   <i className=' text-3xl'>
                     <FaMusic/>
                   </i>
                )
               }
                <p>{item.name}</p>
              </div>
           })
        }
       </div>
    </div>
  )
}

export {Index};