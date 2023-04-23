import React from 'react';
import { TbMicrophone2,TbPlayerPlayFilled} from 'react-icons/tb';
import { GoPerson } from 'react-icons/go'
import {RxTimer} from 'react-icons/rx'
import {BsMusicNoteList} from 'react-icons/bs'
import {FaHeart,FaThList} from 'react-icons/fa'

const MenuList = [
    {id:1,icon:<GoPerson/>,name:"Profile",url:''},
    
    // {id:2,icon:<FaThList/>,name:"Feed",url:'/react-sopity-clone/feed'},

    // {id:3,icon:<TbMicrophone2/>,name:"Top Artist",url:'/react-sopity-clone/artist'},

    // {id:4,icon:<RxTimer/>,name:"Recent",url:'/react-sopity-clone/recent'},

    // {id:5,icon:<FaHeart/>,name:"Favorites",url:'/react-sopity-clone/favorites'},
    {id:6,icon:<BsMusicNoteList/>,name:"PlayList",url:'/playlist'},

    { id:7,icon:<TbPlayerPlayFilled/>,name:'Player',url:'/player'}
]
export {MenuList};