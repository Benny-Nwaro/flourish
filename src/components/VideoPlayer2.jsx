import React from 'react';
import video from '../assets/videos/video1.mp4'

const VideoPlayer2 = () => {
  return (
    <div className='flex justify-center items-center w-full pt-64 pb-10  px-32  rounded-2xl max-md:px-5 max-md:pt-10 max-md:pb-10 '>
      
      <video src={video} controls allow="autoplay"  className='flex justify-center items-center w-full h-[600px] rounded-2xl shadow-2xl shadow-zinc-800 max-md:h-[500px] ' />
    </div>
  );
};

export default VideoPlayer2;