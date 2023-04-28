import React from 'react';
import { FaSpotify,FaEllipsisH,FaSearch ,FaGithub} from "react-icons/fa";
import { Menu } from './Menu';
import { IconContext } from 'react-icons';

function LeftMenu() {

  return (

    <main className='leftMenu bg-black h-full min-h-screen w-20 min-w-[64px]  py-6 overflow-hidden flex justify-between flex-col  top-0 left-0'>

      {/* Logo */}
       <div className="logo-container text-green-500 flex items-center justify-center">
          <i className='md:text-5xl text-4xl'><FaSpotify/></i>
       </div>

       {/* Menu of App*/}
       <Menu/>

      {/* Add github icon */}
       <div className='text-[#848484] hover:text-blue-400 flex justify-center items-center mb-6 cursor-pointer'>
          <IconContext.Provider value={{size:'35px',className:'btn-icon'}}><i><FaGithub/></i></IconContext.Provider>
       </div>
       
    </main>   
  )
}

export  {LeftMenu};