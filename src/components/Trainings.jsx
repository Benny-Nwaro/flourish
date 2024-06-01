import React from 'react'
import { Link } from 'react-router-dom';





function Button({ children, className }) {
    return (
      <button className={`justify-center px-11 py-4 text-xl tracking-normal text-white whitespace-nowrap bg-blue-600 rounded-[58.975px] max-md:px-5 ${className}`}>
        {children}
      </button>
    );
  }
  
  function Heading({ children, className }) {
    return (
      <h1 className={`mt-4 text-7xl tracking-tighter font-kuano leading-[77px] max-md:text-4xl max-md:leading-10 ${className}`}>
        {children}
      </h1>
    );
  }
  
  function Paragraph({ children, className }) {
    return (
      <p className={`mt-4 text-base tracking-normal leading-6 ${className}`}>
        {children}
      </p>
    );
  }
  
  function Image({ src, alt, className }) {
    return (
      <img loading="lazy" src={src} alt={alt} className={className} />
    );
  }

export default function Trainings() {
  return (
    <section className="flex justify-center items-center px-32 py-20 bg-slate-200 max-md:px-5">
      
      <div className="mt-16 w-full max-w-[1290px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <div className="justify-center whitespace-nowrap self-start bg-white font-bold py-3 px-5 w-61 max-w-64 text-sm tracking-normal text-blue-600 animate-pulse rounded-full  max-md:px-5">
            The Church with Eternity in View
          </div>
            <div className="flex flex-col self-stretch my-auto text-black font-serif leading-[93%] max-md:mt-10">

              <div className='font-serif '>
         
              <Heading>We train people</Heading>
              <Paragraph>
                At the Flourish Nation Global, we are on a mission to raise a generation of True witnesses, trained in wisdom and stature, favoured of the Lord and Men, Empowered by the Spirit and sent for Kingdom Purpose.
              </Paragraph>
              <Link to="/sermons"><Button className="mt-5 px-2 w-2/4 hover:bg-opacity-5">Sermons</Button></Link>
              </div>
             
              
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
            <div className="grow py-10  w-full bg-white rounded-xl max-md:mt-10 max-md:max-w-full max-md:w-full">
              <div className="flex gap-8 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col -ml-10 max-md:ml-0 max-md:px-5 max-md:w-full">
                  <div className="flex flex-col   my-auto  rounded-2xl bg-zinc-300 max-md:mt-5">
                    <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/699b52b171cc53fa35fd45504c9a5126c6a8f4cdc67118e4d859f309988fb1bd?apiKey=873e47fe7796454e93671642132d9742&" alt="" className="max-w-full rounded-2xl aspect-[0.63] max-md:w-full shadow-lg hover:scale-75" />
                  
                  </div>
                  
                </div>
 
                <div className="flex flex-col pr-8  max-md:ml-0 max-md:pl-5 max-md:w-full">
                  <div className="flex flex-col justify-center items-center  my-auto w-full rounded-2xl bg-zinc-300 max-md:mt-10">
                    <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/5932a3d2785828c62b43b2f4d458ce8fe514ad439df6dd7fe88d615fa8483656?apiKey=873e47fe7796454e93671642132d9742&" alt="" className="max-w-full rounded-2xl aspect-[0.63] max-md:w-full shadow-lg hover:scale-75" />
                  
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
