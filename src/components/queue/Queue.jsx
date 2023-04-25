import React from 'react';
import { IconContext } from 'react-icons';
import {MdOutlineWatchLater} from 'react-icons/md'

function Queue({ tracks, setCurrentIndex}) {
  
  return (
    <div className='queue_container w-full h-full mx-6'>
        <p className='upNext my-6 ml-5 font-bold text-white text-2xl'> Up Next</p>

            <table className="queue-list w-[95%] mx-auto table table-songs text-xs">
              <thead className='border-b-2 border-zinc-500'>
                <tr>
                  <th className='text-sm text-left text-[#848484] py-3 uppercase'>#</th>
                  <th className='text-sm text-left text-[#848484] py-3 uppercase'>Song</th>
                  <th className='text-sm text-left text-[#848484] py-3 uppercase'>Artist</th>
                  <th>
                    <IconContext.Provider value={{size:'25px',color:'#848484'}}>
                         <MdOutlineWatchLater/>
                      </IconContext.Provider>
                   </th>
                </tr>
              </thead>
              <tbody>
                    {
                      tracks?.map((track,idx)=>{
                       console.log(track?.track?.artists[0].name);
                       return <tr tabIndex="1" key={idx} onClick={()=> setCurrentIndex(idx)} className='hover:bg-[#262626] focus:bg-[#262626] text-sm cursor-pointer'>
                          <td className='text-white text-sm py-6'>{idx+1}</td>
                          <td className='text-white text-sm py-6'>{track?.track?.name}</td>
                          <td className='text-white text-sm py-6'>{track?.track?.artists[0].name}</td>
                          <td className='text-[#7d7e81] text-sm py-6'>3:54</td>
                      </tr> 
                      })
                    }
              </tbody>
            </table>
          </div>
  )
}

export  {Queue};