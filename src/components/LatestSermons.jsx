import React from 'react'
import Playlist from './Playlist';


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
    
    <section className="flex justify-center items-center  pt-0 bg-slate-200 ">

<div className="flex  flex-col w-full h-full  items-start  ">
<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d9f51c5d5a5f1c8de43cd34fef0687759a0b12c75dc66770443bc2e907f0c0d?apiKey=873e47fe7796454e93671642132d9742&" alt="PACE Image" className=" inset-0 pt-0 -mt-24 " />


</div>
</section>


<div className=' pt-20 px-32 bg-white max-md:px-5 '>
<Playlist />
</div>


    </>
       
  
  )
}
