import React from 'react'

function Button({ children }) {
    return (
      <div className="flex relative justify-center items-center px-11 py-4 mt-5 mb-10 ml-16 w-40 max-w-full bg-blue-600 rounded-[58.975px] max-md:px-5 max-md:ml-2.5">
        {children}
      </div>
    );
  }
  

export default function LatestSermons() {
  return (
    
      <div className="flex  flex-col  items-start pb-80  max-md:px-5 ">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d9f51c5d5a5f1c8de43cd34fef0687759a0b12c75dc66770443bc2e907f0c0d?apiKey=873e47fe7796454e93671642132d9742&" alt="" className=" absolute inset-0 pb-10  size-full" />

    <section className="self-start mt-48 ml-20 pt-20 text-7xl tracking-tighter text-white font-serif  max-md:mt-10  z-50 max-md:text-4xl">
      <h2>Latest Sermons</h2>
    </section>
    <p className=" font-serif text-l px-32  text-white  z-50 ">
      Convinced of this, I know that I will remain and continue with you all, for your progress and joy in the faith
    </p>

  </div>
 

   
  
  )
}
