import React from 'react';
import { loginEndpoint } from '../../spotify';
import {FaSpotify} from 'react-icons/fa'

function Login() {
    return (
        <div className='w-full h-screen bg-t_black text-t_white flex justify-center items-center flex-col'>
            <h1 className='text-2xl md:text-4xl font-bold my-8 flex items-center'> 
            <i className='mx-3'><FaSpotify/></i>
            Spotify Login</h1>
           
            <a href={loginEndpoint}>
                <button className='bg-t_green md:w-80 w-60 text-center hover:bg-t_green text-t_white font-bold py-2 px-4 rounded-xl'>Log In</button>
            </a>
        </div>
    )
}

export default Login;