import React from 'react';
import { FaSpotify,FaEllipsisH,FaSearch } from "react-icons/fa";
import { Menu } from './Menu';
import { MenuList} from './MenuList';

function LeftMenu() {

  return (
    <section className='leftMenu bg-black h-full min-h-screen w-28 min-w-[64px]  py-6 px-4 overflow-hidden flex justify-between flex-col border-r border-[#848484]  top-0 left-0'>

      {/* Logo */}
       <div className="logo-container text-green-500 flex items-center justify-center">
          <i className='md:text-5xl text-4xl'><FaSpotify/></i>
       </div>

       {/* Search */}
       {/* <div className="search-box w-full h-10 mt-8 text-[#848484] bg-[#252323d6] overflow-hidden rounded-xl hidden md:flex  items-center justify-center">
          <i className='text-[#848484] text-xl p-2'><FaSearch/></i>
           <input type="text" placeholder="search.." className='w-full h-full border-none outline-none px-2 bg-transparent text-white text-sm font-bold'/>
      
       </div> */}

       {/* Menu */}
       <Menu menuObject={MenuList}/>
       
    </section>   
  )
}

export  {LeftMenu};