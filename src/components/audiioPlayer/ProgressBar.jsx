import React, { useEffect, useState } from 'react';
import { FaPlayCircle  } from "react-icons/fa";
import { BsFillCaretLeftFill,BsFillCaretRightFill  } from "react-icons/bs";
import { IconContext } from 'react-icons';

function ProgressBar() {

    const progress = document.querySelector('.progress');
    const [value, setValue] = useState(0);
    
    const inputrange = (value)=>{
       setValue(value);
       document.querySelector('.progress').style.background = `linear-gradient(to right, #38c038 0%, #38c038 ${value}%, #312f2f ${value}%, #312f2f 100%)`
    }
 


  return (
    <div className='w-full'>

        <div className="audio_btns flex justify-center items-center cursor-pointer text-white mb-1">
        <IconContext.Provider value={{size:'20px'}}>
            <span><BsFillCaretLeftFill/></span>
            <IconContext.Provider value={{size:'35px'}}>
                <span className='mx-2'><FaPlayCircle/></span>
            </IconContext.Provider>
            <span><BsFillCaretRightFill/></span>
        </IconContext.Provider>
        </div>
            
        <input type="range" value={value} min="0" max="100" step="1" className='progress' onChange={(e)=> inputrange(e.target.value)}/>
    </div> 
  )
}

export default ProgressBar;