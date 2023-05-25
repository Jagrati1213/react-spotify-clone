import React from 'react';
import { useNavigate } from 'react-router';
import { IconContext } from 'react-icons/lib';
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

function HistoryArrows() {

  const navigate = useNavigate();

  return (
    <main className='w-[100%] ml-auto md:ml-20 fixed top-0  bg-t_black py-4 z-10'>
         <div className='text-t_white flex ml-2'>
            <IconContext.Provider value={{size:'15px'}}>
                  <i className='mx-2 bg-t_black p-2 rounded-full cursor-pointer' onClick={() => navigate(-1)}><FaArrowLeft/></i>
                  <i className='mx-2 bg-t_black p-2 rounded-full cursor-pointer' onClick={() => navigate(1)}><FaArrowRight/></i>
            </IconContext.Provider>
         </div>
         <div></div>
    </main>
  )
}

export default HistoryArrows;