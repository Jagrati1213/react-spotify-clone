import React from 'react';
import { IoIosAlbums} from 'react-icons/io';
import { GoPerson } from 'react-icons/go'
import {RxTimer} from 'react-icons/rx'
import {BsMusicNoteList} from 'react-icons/bs'
import {FaMusic} from 'react-icons/fa'
import { MenuList } from './MenuList';

function Menu() {

  return (
        // Menu container
        <div className='menuContainer my-4'>
            <ul className='w-full p-0'>
                {/* Render MenuList */}
                <MenuList url='/' title='Profile' icon={<GoPerson/>}/>
                <MenuList url='/albums' title='Albums' icon={<IoIosAlbums/>}/>
                <MenuList url='/tracks' title='Top Tracks' icon={<FaMusic/>}/>
                <MenuList url='/recent' title='Recent' icon={<RxTimer/>}/>
                <MenuList url='/playlist' title='Playlist' icon={<BsMusicNoteList/>}/>
           </ul>
        </div>
  )
}

export {Menu}; 