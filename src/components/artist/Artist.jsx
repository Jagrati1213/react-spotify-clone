import React, { useEffect ,useState} from 'react';
import profile from '../../images/profile.png'
import { apiClient} from '../../spotify'
import PropTypes from 'prop-types';

function Artist(props) {

    // const  artistId  = props;
    // const [artist, setArtist] = useState(null);
  
    useEffect(() => {
        apiClient.get('artist/1wRPtKGflJrBx9BmLsSwlU').then((res)=>console.log(res));
    }, []);

  return (
    <div className='screen_container w-full max-w-[1400px] h-full min-h-screen md:p-18 p-12 mx-auto overflow-y-auto'>
         <header className='flex items-center justify-between w-full text-white'>
            
            <h1 className='text-2xl font-bold'>Top Artist</h1>
            
            <div className='artist_selector flex justify-between gap-4 cursor-pointer flex-wrap'>
                <p className='active text-[#848484] hover:text-white font-semibold'>All Time</p>
                <p className='text-[#848484] hover:text-white font-semibold'>Last 6 Months</p>
                <p className='text-[#848484] hover:text-white font-semibold'>Last 4 Weeks</p>
            </div>
         </header>

         <div className="artist_container w-full overflow-y-auto grid mt-6 gap-5">
            <div className='flex justify-center items-center flex-col bg-[#282828] py-6 px-3'>
                <a href="#" className='w-40 h-40 rounded-full bg-[#101010] overflow-hidden'>
                    <img src={profile} alt="" className='w-40 h-40 rounded-full object-cover ' />
                </a>
                <a href="#" className='mt-5 text-center text-white'>
                    <p >Name</p>
                </a>
           
            </div>
         </div>
    </div>

    
  )
}

Artist.propTypes = {
    artistId: PropTypes.string,
  };
export  {Artist};
