import React from 'react';
import { TbMicrophone2} from 'react-icons/tb';
import { GoPerson } from 'react-icons/go'
import {RxTimer} from 'react-icons/rx'
import {BsMusicNoteList} from 'react-icons/bs'
import {FaHeart,FaThList} from 'react-icons/fa'

const MenuList = [
    {id:1,icon:<GoPerson/>,name:"Profile"},
    {id:2,icon:<FaThList/>,name:"Feed"},
    {id:3,icon:<TbMicrophone2/>,name:"Top Artist"},
    {id:4,icon:<RxTimer/>,name:"Recent"},
    {id:5,icon:<FaHeart/>,name:"Favorites"},
    {id:6,icon:<BsMusicNoteList/>,name:"PlayList"},
]
export {MenuList};