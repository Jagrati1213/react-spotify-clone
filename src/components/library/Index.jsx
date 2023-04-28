import React, { useEffect, useState } from 'react'
import { apiClient } from '../../spotify';
import {FaMusic} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import {AiFillPlayCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router';


function Index() {
    
  const [playList,setPlayList] = useState([]);

  useEffect(()=>{
    apiClient.get('me/playlists').then(res => setPlayList(res.data.items));
   },[]);

   const navigate = useNavigate();

   const playPlayList =(id)=>{
    navigate(`/playlist/:${id}`,{state:{id:id}});
   }
   

  return (
    <div className='screen_container w-full max-w-[1400px] min-h-screen md:p-18 p-12 mx-auto  overflow-y-auto'>
   {
     playList?
     (<>
            <h1 className='text-white text-2xl font-bold my-3 lg:mx-auto lg:text-left text-center'>Your PlayList</h1>
            <div className="library_body w-full h-full grid gap-7 flex-wrap justify-between">
            {
              playList.map((item)=>{
                  return <div className='playlist_card rounded-md text-white flex flex-col text-center my-3' key={item.id}
                  onClick={()=>{ playPlayList(item.id)}}>
                        { item.images.length ?
                        (<>
                           <div className='flex justify-center bg-[#282828] rounded relative'>
                              <img src={item.images[0].url} alt="playlist" className='rounded'/>
                              <div className="playlist_fade flex justify-center items-center absolute w-full h-full bg-[#00000080] transition-all top-0">
                                 <IconContext.Provider value={{size:'50px',color:'#24cd07fa'}}>
                                    <AiFillPlayCircle/>
                                 </IconContext.Provider>
                              </div>
                           </div>
                        </>):
                        ( <div className='w-full pb-[100%] flex justify-center items-center relative bg-[#282828]'> 
                              <div className='flex justify-center items-center absolute bottom-0 w-full h-full text-5xl text-white'>
                                 <i className='text-white'><FaMusic/></i>
                                 <div className="playlist_fade flex justify-center items-center absolute w-full h-full bg-[#00000080] transition-all top-0">
                                       <IconContext.Provider value={{size:'50px',color:'#24cd07fa'}}><AiFillPlayCircle/></IconContext.Provider>
                                 </div>
                              </div>
                           </div>
                           )}
                        <div className='mt-5'>
                           <p className='text-[14px] cursor-pointer hover:underline'>{item.name}</p>
                           <span className='text-[14px] uppercase text-[#848484]'>{item.tracks.total} tracks</span>
                        </div>
                  </div>
              })
            }
            </div>
      </>):
     (
      <div className='screen_container w-full max-w-[1400px] h-full min-h-screen md:p-18 p-12 mx-auto  overflow-y-auto'>
         <h1 className='text-white text-2xl font-bold my-3 mx-auto'>No track found</h1>
      </div> 
     )
   }
   </div>
  )
}

export {Index};