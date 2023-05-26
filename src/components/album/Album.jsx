import React,{useState,useEffect} from 'react';
import { apiClient } from '../../spotify';
import {FaMusic} from 'react-icons/fa'
import Loader from '../loader/Loader';
import '../../style/Album.css';
import { Link } from 'react-router-dom';

function Album() {

    const [albums,setAlbums] = useState([]);
   
    useEffect(()=>{

        let controller = new AbortController();
        apiClient.get('me/albums')
        .then(res =>{ 
            setAlbums(res.data?.items);
            controller = null;
        })
        .catch((err)=> console.error(err));

        return () => controller?.abort();

     },[]);
  
  return (
        <main className='screen_container lg:w-[90%] md:w-10/12 w-full max-w-[100%] min-h-screen md:p-18 p-8 mx-auto overflow-y-scroll ml-auto md:ml-20 mt-12'>
                <h1 className='text-t_white text-2xl font-bold my-3 mx-auto lg:text-left text-center'>Your album</h1>

                {albums.length?
                (
                <>
                <div className="artist_container w-full h-full grid gap-7 flex-wrap justify-between">
                    {/* Mapping albums */}
                    { albums.map((item,id)=>{
                        return <Link to={`/albums/${item?.album?.id}`} key={id}>
                                <div className='playlist_card rounded-md text-t_white flex flex-col text-center my-3'>
                                        
                                    {item?.album?.images.length ?
                                    (
                                        <div className='flex justify-center bg-[#282828]'>
                                            <img src={item?.album?.images[0].url} alt="playlist"/>
                                        </div>
                                    ):
                                    (<div className='w-full pb-[100%] flex justify-center items-center bg-[#282828]'> 
                                           <div className='flex justify-center items-center absolute bottom-0 w-full h-full text-5xl text-t_white'>
                                                <i className='text-t_white'><FaMusic/></i>
                                            </div>
                                    </div>
                                    ) 
                                    }
                                    <div className='mt-5'>
                                        <p className='text-[14px] cursor-pointer hover:underline'>{item?.album?.name}</p>
                                        <span className='text-[14px] uppercase text-t_white'>{item?.album?.label} tracks</span>
                                    </div>
                                </div>
                            </Link>
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