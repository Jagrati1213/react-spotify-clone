import React from 'react';
import { TbMicrophone2} from 'react-icons/tb';
import { GoPerson } from 'react-icons/go'
import {RxTimer} from 'react-icons/rx'
import {BsMusicNoteList} from 'react-icons/bs'
import {FaPlay,FaMusic} from 'react-icons/fa'
import { MenuList } from './MenuList';

function Menu() {

  return (
        // Menu container
        <section className='menuContainer my-4'>
            <ul className='w-full p-0'>

                {/* Render MenuList */}
                <MenuList url='/' title='Profile' icon={<GoPerson/>}/>
                {/* <MenuList url='/artist/:artistId' title='Top Artist' icon={<TbMicrophone2/>}/> */}
                <MenuList url='/tracks' title='Top Tracks' icon={<FaMusic/>}/>
                <MenuList url='/recent' title='Recent' icon={<RxTimer/>}/>
                <MenuList url='/playlist' title='Playlist' icon={<BsMusicNoteList/>}/>
                {/* <MenuList url='/player' title='Player' icon={<FaPlay/>}/> */}
           </ul>
        </section>
  )
}

export {Menu}; 