import React, { useEffect, useState } from 'react';
import { apiClient } from '../spotify';
import Profile from "../images/profile.png";

function Banner() {

  const [userImg, setUserImg] = useState(Profile);
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);
  const [playList, setPlayList] = useState(0);
  const [userName, setUserName] = useState('User Name');
  const [userUrl, setUserUrl] = useState('');

  useEffect(()=>{

    apiClient.get('me').then(res => console.log(res));

    // set img
    apiClient.get('me').then(res => setUserImg(res.data.images[0].url));
    // set name
    apiClient.get('me').then(res => setUserName(res.data.display_name));
    // set followers
    apiClient.get('me').then(res => setFollower(res.data.followers.total));
    // set url
    apiClient.get('me').then(res => setUserUrl(res.data.external_urls.spotify));

    
  },[]);

  return (
    <div className='banner mt-12'>
          {/* Profile Image */}
          <div className="profile_container flex flex-col justify-center items-center">

               <div className="profile w-40 h-40 bg-black rounded-full flex items-center">
                 <img src={userImg} alt="Me" className='rounded-full' />
               </div>

               <a href={userUrl} target="_blank">
                  <h1 className='text-white hover:text-green-500 cursor-pointer md:text-5xl text-4xl font-bold my-4'>{userName}</h1>
               </a>

               <div className="user_social grid grid-cols-3 gap-8 mt-5">

                    <div className="user_follower text-center text-base">
                         <span className='text-green-500'>{follower}</span>
                         <p className='text-[#848484]'>Followers</p>
                    </div>

                    <div className="user_following text-center text-base">
                         <span className='text-green-500'>{following}</span>
                         <p className='text-[#848484]'>Following</p>
                    </div>

                    <div className="user_playList text-center text-base">
                         <span className='text-green-500'>{playList}</span>
                         <p className='text-[#848484]'>Playlist</p>
                    </div>
               </div>

               <button className='rounded-full my-5 px-6 py-2 border-2 border-white text-white  hover:border-green-600 hover:bg-green-600 cursor-pointer'>LOGOUT</button>
          </div>

    </div>
  )
}

export default Banner;