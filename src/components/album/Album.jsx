import React,{useState,useEffect} from 'react';
import { apiClient } from '../../spotify';
import {FaMusic} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import {AiFillPlayCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router';
import Loader from '../loader/Loader';
import '../../style/Album.css';

function Album() {
    const [albums,setAlbums] = useState([]);
    const navigate = useNavigate();
   
    const getAlbumsTracks =(album_id)=>{
        navigate(`/albums/:${album_id}`,{state:{id:album_id}});
    }
    useEffect(()=>{
      apiClient.get('me/albums').then(res => setAlbums(res.data?.items));
     },[albums]);
  
  return (
        <main className='screen_container lg:w-[90%] md:w-10/12 w-full max-w-[100%] min-h-screen md:p-18 p-8 mx-auto overflow-y-scroll ml-auto md:ml-20'>
                <h1 className='text-white text-2xl font-bold my-3 mx-auto lg:text-left text-center'>Your album</h1>

                {albums.length?
                (
                <>
                <div className="artist_container w-full h-full grid gap-7 flex-wrap justify-between">
                        {/* Mapping albums */}
                        { albums.map((item,id)=>{

                            return <div className='playlist_card rounded-md text-white flex flex-col text-center my-3' key={id} onClick={()=>getAlbumsTracks(item?.album?.id)}>
                                
                                {item?.album?.images.length ?
                                (
                                <div className='flex justify-center bg-[#282828] rounded relative'>
                                    <img src={item?.album?.images[0].url} alt="playlist" className='rounded'/>
                                    <div className="playlist_fade flex justify-center items-center absolute w-full h-full bg-[#00000080] transition-all top-0">
                                    <IconContext.Provider value={{size:'50px',color:'#24cd07fa'}}><AiFillPlayCircle/></IconContext.Provider>
                                    </div>
                                </div>
                                ):
                                (<div className='w-full pb-[100%] flex justify-center items-center relative bg-[#282828]'> 
                                    <div className='flex justify-center items-center absolute bottom-0 w-full h-full text-5xl text-white'>
                                        <i className='text-white'><FaMusic/></i>
                                        <div className="playlist_fade flex justify-center items-center absolute w-full h-full bg-[#00000080] transition-all top-0">
                                            <IconContext.Provider value={{size:'50px',color:'#24cd07fa'}}><AiFillPlayCircle/></IconContext.Provider>
                                        </div>
                                    </div>
                                </div>
                                ) 
                                }
                                <div className='mt-5'>
                                    <p className='text-[14px] cursor-pointer hover:underline'>{item?.album?.name}</p>
                                    <span className='text-[14px] uppercase text-[#848484]'>{item?.album?.label} tracks</span>
                                </div>
                    </div>
                    })}
                </div>
                </>
                ):
                (
                <Loader/>
                )}
        </main>
    )
}

export default Album