import React from "react";
import {FaPlus} from 'react-icons/fa';
import {BsMusicNoteList,BsTrash} from 'react-icons/bs';
import PlayList from "./PlayList";

function MenuPlayList() {
  return (
    <div className="menuPlayListContainer my-4 hidden md:block">
       {/* Name of conatiner */}
        <div className="nameContainer text-[#848484] flex justify-between items-center uppercase text-base my-3">
            <p className="font-bold cursor-pointer">PlayList</p>
            <i className="cursor-pointer text-white"><FaPlus/></i>
        </div>

        {/* PlayList Scroller */}
        <div className="playListScrollContainer h-40 overflow-x-hidden overflow-y-scroll">
            {
                PlayList &&
                PlayList.map((item, idx)=>{
                   return <div key={idx} className="playList flex justify-between items-center my-3 text-[#848484] cursor-pointer hover:text-white">
                   <p className="flex items-center">
                       <i className="mr-3"><BsMusicNoteList/></i>
                       <span>{item.name}</span> 
                   </p>
                   <i><BsTrash/></i>
               </div>
                })
            }
        </div>
    </div>
  )
}

export  {MenuPlayList}