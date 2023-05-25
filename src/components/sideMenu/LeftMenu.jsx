import React from 'react';
import { FaSpotify,FaGithub} from "react-icons/fa";
import { Menu } from './Menu';
import { IconContext } from 'react-icons';
import '../../style/LeftMenu.css';

function LeftMenu() {

  return (

    <main className='fixed leftMenu bg-t_black md:h-full md:min-h-screen md:w-20 w-full min-w-[64px]  md:py-6 overflow-hidden flex justify-between flex-col  left-0 z-40'>

      {/* Logo */}
       <div className="logo-container text-t_green md:flex items-center justify-center hidden">
          <i className='md:text-5xl text-4xl'><FaSpotify/></i>
       </div>

       {/* Menu of App*/}
       <Menu/>

      {/* Add github icon */}
       <div className='text-t_white hover:text-t_green md:flex justify-center items-center mb-6 cursor-pointer hidden'>
          <IconContext.Provider value={{size:'35px',className:'btn-icon'}}><i><FaGithub/></i></IconContext.Provider>
       </div>
       
    </main>   
  )
}

export  {LeftMenu};