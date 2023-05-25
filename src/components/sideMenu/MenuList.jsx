import React from 'react';
import { IconContext } from 'react-icons/lib';
import { Link, useLocation } from 'react-router-dom';

function MenuList({url,icon,title}){

    // add active class in menu
     const location =  useLocation();
     const isActive = location.pathname === url;
     const btnClass = isActive ? 'active':'';

    return(
    <li className={`${btnClass} relative md:my-2 w-full py-2 cursor-pointer`}>
        <Link to={url} className={`text-[#848484] flex items-center flex-col justify-center text-[12px] md:ml-0 ml-2 hover:text-t_white`}>  

            <IconContext.Provider value={{size:'20px',className:'btn-icon'}}>
                <i className='text-xl'>{icon}</i>
                <span className='mt-1 md:inline hidden'>{title}</span>
            </IconContext.Provider>
                               
        </Link>
    </li>
    )
}
export {MenuList};