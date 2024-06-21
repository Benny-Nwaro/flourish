import React from 'react';
import video from '../assets/videos/video1.mp4'

const VideoPlayer2 = () => {
  return (
    <div className='flex justify-center items-center w-full pt-20 pb-20 px-32 h-[800px] rounded-2xl max-md:px-5 max-md: '>
      
      <video src={video} controls allow="autoplay"  className='flex justify-center items-center w-full h-[500px] rounded-2xl shadow-2xl shadow-zinc-800  ' />
    </div>
  );
};

export default VideoPlayer2;