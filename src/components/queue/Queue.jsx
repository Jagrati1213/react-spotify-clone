import React from 'react';
import { IconContext } from 'react-icons';
import {MdOutlineWatchLater} from 'react-icons/md'

function Queue({ tracks, setCurrentIndex}) {
  return (
    <div className='queue_container w-full h-full mx-6'>
        <p className='upNext my-6 ml-5 font-bold text-white text-2xl'> Up Next</p>

            <table className="queue-list w-full table table-songs">
              <thead className='border-b-2 border-zinc-500'>
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Album</th>
                  <th>Date Added</th>
                  <th>
                    <IconContext.Provider value={{size:'25px'}}>
                         <MdOutlineWatchLater/>
                      </IconContext.Provider>
                   </th>
                </tr>
              </thead>
              <tbody>
                    {
                      tracks.map((track)=>{
                        <tr tabindex="1">
                        <td>
                          <a href="#" tabindex="0" class="play-btn fa-stack fa-lg">
                            <span class="fa fa-play fa-stack-1x"></span>
                            <span class="fa fa-circle-thin fa-stack-2x"></span>
                          </a>
                        </td>
                        <td><span class="fa fa-check"></span></td>
                        <td>Memory</td>
                        <td>Sugarcult</td>
                        <td>Palm Trees and Power Lines</td>
                        <td class="secondary-info">2016-07-23</td>
                        <td class="secondary-info">3:54</td>
                      </tr> 
                      })
                    }
              </tbody>
            </table>
          </div>
  )
}

export  {Queue};