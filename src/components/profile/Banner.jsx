import React, { useEffect, useState } from 'react';
import { apiClient, setClientToken } from '../../spotify';
import profile from '../../images/profile.png';

function Banner() {

  const [userImg, setUserImg] = useState(profile);
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);
  const [playList, setPlayList] = useState(0);
  const [userName, setUserName] = useState('User Name');
  const [userUrl, setUserUrl] = useState('');

  useEffect(()=>{

    apiClient.get('me').then(res => {
     // set img
     setUserImg(res.data.images[0].url);
    
     // set url
     setUserUrl(res.data.external_urls.spotify);
   
     // set name
     setUserName(res.data.display_name);
    
     // set followers
     setFollower(res.data.followers.total);
    });
    
    //set playlist
    apiClient.get('me/playlists').then(res => setPlayList(res.data.items.length));

    
  },[]);

  return (
    <div className='banner mt-12'>
          {/* Profile Image */}
          <div className="profile_container flex flex-col justify-center items-center">

               <div className="profile w-40 h-40 bg-gray-700 rounded-full flex items-center">
                 <img src={userImg} alt="Me" className='rounded-full' />
               </div>

               <a href={userUrl} target="_blank">
                  <h1 className='text-white hover:text-green-500 cursor-pointer md:text-5xl text-4xl font-bold my-4'>{userName}</h1>
               </a>

               <div className="user_social grid grid-cols-3 gap-8 mt-5 font-semibold" style={{letterSpacing:'.3px'}}>

                    <div className="user_follower text-center text-[17px]">
                         <span className='text-green-500'>{follower}</span>
                         <p className='text-[#848484]'>Followers</p>
                    </div>

                    <div className="user_following text-center text-[17px]">
                         <span className='text-green-500'>{following}</span>
                         <p className='text-[#848484]'>Following</p>
                    </div>

                    <div className="user_playList text-center text-[17px]">
                         <span className='text-green-500'>{playList}</span>
                         <p className='text-[#848484]'>Playlist</p>
                    </div>
               </div>

               <button className='rounded-full my-5 px-6 py-2 border-2 border-white text-white  hover:text-black hover:bg-white cursor-pointer'>LOGOUT</button>
          </div>

    </div>
  )
}

export default Banner;