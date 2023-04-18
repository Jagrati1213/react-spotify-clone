import React from 'react';
import '../style/LeftMenu.css';
import { FaSpotify,FaEllipsisH,FaSearch } from "react-icons/fa";
import { Menu } from './Menu';
import { MenuList} from './MenuList';
import { MenuPlayList } from './MenuPlayList';
import { TrackList } from './TrackList';

function LeftMenu() {

  return (
    <section className='leftMenu bg-black h-full min-h-screen w-20 min-w-[64px] md:w-72 py-6 px-4 overflow-hidden'>

      {/* Logo */}
       <div className="logo-container text-white flex items-center justify-center md:justify-between">
          <i className='md:text-3xl text-4xl'><FaSpotify/></i>
          <h2 className='text-xl md:inline hidden'>Spotify</h2>
          <i className='text-xl md:inline hidden'><FaEllipsisH/></i>
       </div>

       {/* Search */}
       <div className="search-box w-full h-10 mt-8 text-[#848484] bg-[#252323d6] overflow-hidden rounded-xl hidden md:flex  items-center justify-center">
          <i className='text-[#848484] text-xl p-2'><FaSearch/></i>
           <input type="text" placeholder="search.." className='w-full h-full border-none outline-none px-2 bg-transparent text-white text-sm font-bold'/>
      
       </div>

       {/* Menu */}
       <Menu title={'Menu'} menuObject={MenuList}/>

       {/* PlayList */}
       <MenuPlayList/>

       {/* Song-Details */}
       <TrackList/>
       
    </section>   
  )
}

export  {LeftMenu};