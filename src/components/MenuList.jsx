import React from 'react';
import {BsFillHouseFill, BsJournalAlbum} from 'react-icons/bs';
import {TiPlus} from 'react-icons/ti'
import {FaBroadcastTower, FaMicrophoneAlt,FaPodcast} from 'react-icons/fa'

const MenuList = [
    {id:1,icon:<BsFillHouseFill/>,name:"Home"},
    {id:2,icon:<BsJournalAlbum/>,name:"Album"},
    {id:3,icon:<TiPlus/>,name:"Discover"},
    {id:4,icon:<FaBroadcastTower/>,name:"Radio"},
    {id:5,icon:<FaMicrophoneAlt/>,name:"Artist"},
    {id:6,icon:<FaPodcast/>,name:"Podcasts"},
]
export {MenuList};