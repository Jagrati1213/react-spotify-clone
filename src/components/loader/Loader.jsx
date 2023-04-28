import React from 'react';
import '../loader/Loader.css'

function Loader() {
  return (
    <main className='flex justify-center flex-col items-center h-[100vh]'>
        <div className="loader w-60 h-12 text-center absolute left-2/4 uppercase font-black text-base text-white">Loading</div>
    </main>  
    
)
}

export default Loader