import React, { useEffect, useRef, useState } from 'react';
import { FaPlayCircle,FaPauseCircle  } from "react-icons/fa";
import { BsFillCaretLeftFill,BsFillCaretRightFill  } from "react-icons/bs";
import { IconContext } from 'react-icons';

function ProgressBar({audio,handlePre,handleNext}) {

  const [isPlaying, setIsplaying] = useState(false);
  const [currTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(); //our audio type
  const progressBar = useRef(); //our progress bar
  const animationRef = useRef(); //our animation bar

// get duration 
useEffect(()=>{
    const seconds = Math.floor(audioRef.current.duration);
      setDuration(seconds);
},[audioRef.current?.readyState]);

// change play btn
const changePlayPause = ()=> {

   const preVal = isPlaying;
    if(preVal){
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }else {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
    setIsplaying(!preVal);
};

// display accurate time
 const calculateTime = (sec)=>{

  const minutes = Math.floor(sec/60);
  const resultMin = minutes<10?`0${minutes}`:minutes;

  const seconds = Math.floor(sec % 60);
  const resultSec = seconds<10?`0${seconds}`:seconds;

  return `${resultMin}:${resultSec}`;
}

// while playing
const whilePlaying =()=>{
  if(audioRef.current.currentTime && progressBar.current.value !== duration){
    progressBar.current.value = audioRef.current.currentTime;
    autoPause();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }
}

// Change song while progress bar
const changeProgress= ()=>{
  audioRef.current.currentTime = progressBar.current.value;
  changeCurrentTime();
}

const autoPause = ()=>{
  if(progressBar.current.value === duration){
    setIsplaying(false);
    // progressBar.current.style.setProperty("--track-width",`(0%`);
  }else{
    changeCurrentTime();
  }
}

// Change current time
const changeCurrentTime = ()=>{
    progressBar.current.style.setProperty("--track-width",
    `(${(audioRef.current.currentTime / duration) * 100}%`);

    progressBar.current.style.setProperty("--track-bg", `linear-gradient(to right, #38c038 0%, #38c038 ${(audioRef.current.currentTime / duration) * 100}%, #312f2f ${(audioRef.current.currentTime / duration) * 100}%, #312f2f 100%)`);

    setCurrentTime(progressBar.current.value);
}

const pauseAudioOnEnd= ()=>{
    if(progressBar.current.value == 100){

    }
}
  
return (
    <div className='w-full'>

        <div className="audio_btns flex justify-center items-center cursor-pointer text-white mb-1">
          <audio src={audio} ref={audioRef} preload='auto'></audio>

            <IconContext.Provider value={{size:'20px'}}>
                <span onClick={handlePre}><BsFillCaretLeftFill/></span>
                <IconContext.Provider value={{size:'35px'}}>
                  
                <span className='mx-2' onClick={changePlayPause}>
                    { isPlaying?<FaPauseCircle/>:<FaPlayCircle/> }
                </span>

                </IconContext.Provider>
                <span onClick={handleNext}><BsFillCaretRightFill/></span>
            </IconContext.Provider>
        </div>
            
          <div className='text-[#848484] text-[13px]'>
            {/* currentTime */}
             <span className='mr-2'>
                 {currTime && !isNaN(currTime)? calculateTime(currTime):'0:00'}
              </span>

              {/* track */}
             <input type="range"className='progress' ref={progressBar} onChange={changeProgress}/>

             {/* duration */}
             <span className='ml-2'>
                {duration && !isNaN(duration)? calculateTime(duration):'0:00'}
              </span>

          </div>
    </div> 
  )
}

export default ProgressBar;