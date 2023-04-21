import React from 'react';
import { loginEndpoint } from '../../spotify';
import {FaSpotify} from 'react-icons/fa'

function Login() {
    return (
        <div className='w-full h-screen bg-black text-white flex justify-center items-center flex-col'>
            <h1 className='text-3xl md:text-4xl font-bold my-8 flex items-center'> 
            <i className='mx-3'><FaSpotify/></i>
            Spotify Login</h1>
           
            <a href={loginEndpoint}>
                <button className='bg-green-500 w-80 text-center hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl'>LOG IN</button>
            </a>
        </div>
    )
}

export default Login;