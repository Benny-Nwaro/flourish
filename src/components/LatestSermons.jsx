import React from 'react'
import Playlist from './Playlist';
Playlist

function Button({ children }) {
    return (
      <div className="flex relative justify-center items-center px-11 py-4 mt-5 mb-10 ml-16 w-40 max-w-full bg-blue-600 rounded-[58.975px] max-md:px-5 max-md:ml-2.5">
        {children}
      </div>
    );
  }
  

export default function LatestSermons() {
  return (
    <>
    
    <section className="flex justify-center items-center  py-10 bg-slate-200 max-md:pl-5">

<div className="flex  flex-col px-16  items-start max-md:px-5 ">
<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d9f51c5d5a5f1c8de43cd34fef0687759a0b12c75dc66770443bc2e907f0c0d?apiKey=873e47fe7796454e93671642132d9742&" alt="" className=" inset-0 rounded-lg " />


</div>
</section>


<div className='px-16 bg-white pt-5'>
<Playlist />
</div>


    </>
       
  
  )
}
