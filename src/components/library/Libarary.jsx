import React, { useEffect, useState } from 'react'
import { apiClient } from '../../spotify';
import {FaMusic} from 'react-icons/fa'
import Loader from '../loader/Loader';
import '../../style/Library.css';
import { Link } from 'react-router-dom';

function Libarary() {
    
  const [playList,setPlayList] = useState([]);

  useEffect(()=>{
      let controller = new AbortController();
      apiClient.get('me/playlists')
      .then(res =>{ 
         setPlayList(res.data?.items);
         controller = null;
      }).catch((err)=>{console.log(err)});

      return () => controller?.abort();
   },[]);   

  return (
    <main className='screen_container lg:w-[90%] md:w-10/12 w-full md:max-w-[100%] h-full min-h-screen md:p-18 p-8 pr-3 mx-auto mb-10 overflow-y-scroll ml-auto md:ml-20 mt-12'>
         <h1 className='text-t_white text-2xl font-bold my-3 lg:mx-auto lg:text-left text-center'>Your PlayList</h1>

   {
     playList.length?
     (
        <>
         <div className="library_body w-full h-full grid gap-7 flex-wrap justify-between">
            {
              playList.map((item)=>{
                  return <Link to={`/playlist/${item.id}`} key={item.id}>
                     <div className='playlist_card rounded-md text-t_white flex flex-col text-center my-3'>
                        { item.images.length ?
                        (<>
                           <div className='flex justify-center bg-t_black relative'>
                              <img src={item.images[0].url} alt="playlist"/>
                           </div>
                        </>):
                        ( <div className='w-full pb-[100%] flex justify-center items-center relative bg-[#282828]'> 
                             <div className='flex justify-center items-center absolute bottom-0 w-full h-full text-5xl text-t_white'>
                             <i className='text-t_white'><FaMusic/></i>
                             </div>
                           </div>
                        )}
                        <div className='mt-5'>
                           <p className='text-[14px] cursor-pointer hover:underline'>{item.name}</p>
                           <span className='text-[14px] uppercase text-t_white'>{item.tracks.total} tracks</span>
                        </div>
                     </div>
                  </Link>
              })
            }
         </div>
         </>
     ):
     (
     <Loader/>
     )
   }
   </main>
  )
}

export {Libarary};