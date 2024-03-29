import React, { useEffect, useState } from 'react';
import { apiClient } from '../../spotify';
import profile from '../../images/profile.png';
import { logout } from '../../spotify';

function Banner() {

  const [userImg, setUserImg] = useState(profile);
  const [follower, setFollower] = useState(0);
  const [playList, setPlayList] = useState(0);
  const [userName, setUserName] = useState('User Name');
  const [userUrl, setUserUrl] = useState('');

  useEffect(()=>{

    let controller = new AbortController();

    (
      async function fetchdata(){
        try{
            const { data } = await apiClient.get('me');
              // set img
              setUserImg(data.images[0].url);
           
              // set url
              setUserUrl(data.external_urls.spotify);
            
              // set name
              setUserName(data.display_name);
             
              // set followers
              setFollower(data.followers.total);

           await apiClient.get('me/playlists')
           .then(res => setPlayList(res.data.items.length))
           .catch((err)=>console.log(err));

           controller = null;
        }
        catch (error) {
          console.error(error);
        }
    })();
    
    return () => controller?.abort();
  }, []);

  return (
    <div className='banner mt-12'>
          {/* Profile Image */}
          <div className="profile_container flex flex-col justify-center items-center">

               <div className="profile  bg-t_black rounded-full flex items-center justify-center w-[8rem]">
                 <img src={userImg} alt="Me" className='rounded-full' />
               </div>

               <a href={userUrl} target="_blank" rel="noreferrer">
                  <h1 className='text-t_white hover:text-t_green cursor-pointer lg:text-5xl sm:text-4xl text-2xl font-bold my-4'>{userName}</h1>
               </a>

               <div className="user_social grid grid-cols-2 gap-5 md:gap-8 mt-5 font-semibold" style={{letterSpacing:'.3px'}}>

                    <div className="user_follower text-center sm:text-[17px] text-sm">
                         <span className='text-t_green'>{follower}</span>
                         <p className='text-t_white'>Followers</p>
                    </div>
                    <div className="user_playList text-center sm:text-[17px] text-sm">
                         <span className='text-t_green'>{playList}</span>
                         <p className='text-t_white'>Playlist</p>
                    </div>
               </div>

               {/* panding */}
               <button className='rounded-full my-10 px-6 py-2 border-2 border-t_white text-t_white hover:bg-t_green hover:border-t_green cursor-pointer' onClick={logout}>Logout</button>
          </div>

    </div>
  )
}

export default Banner;
