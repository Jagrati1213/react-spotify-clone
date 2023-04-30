import React from 'react'
import { IconContext } from 'react-icons/lib';
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

function HistoryArrows() {
  return (
    <main className='w-[100%] ml-auto md:ml-20 fixed top-0  bg-[#3432321e] py-4 z-10'>
         <div className='text-white flex ml-2'>
            <IconContext.Provider value={{size:'18px'}}>
                  <i className='mx-2 bg-zinc-800 p-2 rounded-full cursor-pointer'><FaArrowLeft/></i>
                  <i className='mx-2 bg-zinc-800 p-2 rounded-full cursor-pointer'><FaArrowRight/></i>
            </IconContext.Provider>
         </div>
         <div></div>
    </main>
  )
}

export default HistoryArrows;