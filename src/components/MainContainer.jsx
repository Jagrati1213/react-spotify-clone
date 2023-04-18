import React,{useEffect} from 'react';
import '../style/MainContainer.css';
import Banner from './Banner';
import { FaUsers } from "react-icons/fa";
import Login from './Login';
// import { Song } from './Song';

function MainContainer() {

      // add active class in menu
      useEffect(()=>{
        const allList = document.querySelector('.menuList ul').querySelectorAll('li');
  
      function changeMenuActive(){
          allList.forEach(n=>n.classList.remove('active'));
          this.classList.add('active')
      }
      allList.forEach((n)=>{
          n.addEventListener('click', changeMenuActive);
      })
      },[]);

  return (
    <div className='mainContainer h-full bg-black flex-grow'>
        <Banner/>
        
        <div className="menuList flex items-center justify-between py-3 px-6 bg-[#2c2c2c]">
           <ul className='flex items-center'>
              <li className='mx-6 relative'>
                <a href="#" className='text-[#848484] hover:text-white text-sm font-bold'>
                Popular</a>
                </li>
              <li className='mx-6 relative'>
                <a href="#" className='text-[#848484] hover:text-white text-sm font-bold'>Albums</a>
              </li>
              <li className='mx-6 relative'>
                <a href="#" className='text-[#848484] hover:text-white text-sm font-bold'>Songs</a>
              </li>
              <li className='mx-6 relative'>
                <a href="#" className='text-[#848484] hover:text-white text-sm font-bold'>Fans</a>
              </li>
              <li className='mx-6 relative'>
                <a href="#" className='text-[#848484] hover:text-white text-sm font-bold'>About</a>
              </li>
           </ul>

           <p className='text-white text-sm flex items-baseline'>
            <i className='mr-2 text-base'><FaUsers className='inline'/></i>
            12.3M 
            <span className='text-xs ml-2 text-center text-[#848484]'>Followers</span>
           </p>
        </div>
         {/* <Song/> */}
         <Login/>
    </div>
  )
}

export  {MainContainer};