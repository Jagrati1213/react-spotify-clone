import React from 'react';
import { IconContext } from 'react-icons/lib';
import { Link, useLocation } from 'react-router-dom';
import { TbMicrophone2,TbPlayerPlayFilled} from 'react-icons/tb';
import { GoPerson } from 'react-icons/go'
import {RxTimer} from 'react-icons/rx'
import {BsMusicNoteList} from 'react-icons/bs'
import {FaHeart,FaThList} from 'react-icons/fa'

function MenuList({url,icon,title}){

    // add active class in menu
     const location =  useLocation();
     const isActive = location.pathname == url;
     const btnClass = isActive ? 'active':'';

    return(
    <li className={`${btnClass} relative md:my-2 w-full py-2 cursor-pointer`}>
        <Link to={url} className={`text-[#848484] flex items-center flex-col justify-center text-[12px] md:ml-0 ml-2 hover:text-white`}>  

            <IconContext.Provider value={{size:'20px',className:'btn-icon'}}>
                <i className='text-xl'>{icon}</i>
                <span className='inline mt-1'>{title}</span>
            </IconContext.Provider>
                               
        </Link>
    </li>
    )
}
export {MenuList};