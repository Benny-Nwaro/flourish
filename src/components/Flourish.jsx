import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ImagesSection from './ImagesSection';



function Button({ children, className }) {
    return (
      <div className={`justify-center px-11 py-4 rounded-[58.975px]  ${className}`}>
        {children}
      </div>
    );
  }
export default function Flourish() {
  return (
    <section className="flex justify-center items-center  px-16   bg-slate-200">

    <div className="flex flex-col max-sm:pl-5">
      <div className="flex gap-5 justify-between items-start w-full  max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col self-end mt-16 leading-[93%] max-md:mt-10 max-md:max-w-full">
          <div className='px-16 '>
          <div className="justify-center whitespace-nowrap self-start bg-white font-bold py-3 px-5 w-61 max-w-64 text-sm tracking-normal text-blue-600 animate-pulse rounded-full  max-md:px-5 ">
            The Church with Eternity in View
          </div>
     
          </div>

          <div className=' px-16 max-md:w-full '>
       
          <h1 className="mt-5 text-7xl tracking-tighter font-kuano text-black-600 leading-[77px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            The Righteous {" "}
            
            
          </h1 >
          <span className="mt-5 text-7xl tracking-tighter font-kuano text-black-600 leading-[77px] max-md:max-w-full max-md:text-4xl max-md:leading-10">Shall           
          
          <span className="mt-5 text-7xl pl-5 text-blue-600 tracking-tighter font-kuano text-black-600 leading-[77px] max-md:max-w-full max-md:text-4xl max-md:leading-10">Flourish     
    </span>   
    </span> 
          <h1 className="text-7xl tracking-tighter font-kuano text-black-600 leading-[77px] max-md:max-w-full max-md:text-4xl max-md:leading-10">like a Palm Tree</h1>
          <p className="mt-8 w-3/5 text-base tracking-normal leading-6 text-black font-serif max-md:mr-2 max-md:max-w-50px">
            Experience the joy of fellowship and personal growth at our
            upcoming events at the Flourish Nation Global, where deep connection
            and spiritual rejuvenation earnestly awaits you. Here, you will get
            a glimpse on our upcoming events, stay updated for what will come
            next!
          </p>
          <div className="flex gap-3 self-start mt-4 text-xl tracking-normal">
          <Link to="whoweare/"><Button className="text-white whitespace-nowrap bg-blue-600 hover:bg-opacity-5 max-sm:w-4/5 max-sm:pl-2 max-sm:text-md">Who we are</Button></Link>
          <Link to="sermons"> <Button className="text-blue-600 whitespace-nowrap bg-indigo-100 hover:bg-opacity-5 max-sm:w-4/5 max-sm:pl-2 max-sm:text-md">
              Sermons
            </Button></Link>
          </div>
          </div>
          


        </div>
        {/* <div className="flex flex-col self-start pr-16">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe11ca80106f144999b34b9f73d8513d89e7d6801d4ee9cc708274bb775dd8d0?apiKey=873e47fe7796454e93671642132d9742&"
            alt=""
            className="border-white border-solid aspect-square border-[5px] fill-yellow-400 stroke-[5px] stroke-white w-[84px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e367770d9aa964600fe609877e912d728d08081ae02c4f1438e86ec70b950f2?apiKey=873e47fe7796454e93671642132d9742&"
            alt=""
            className="self-end mt-80 max-w-full border-8 border-white border-solid aspect-[1.09] fill-blue-600 stroke-[8.1px] stroke-white w-[110px] max-md:mt-10"
          />
        </div> */}
      </div>
      <ImagesSection/>
      {/* <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/138b857960483ee06d38f82390f53d01cd9f545371ef26e1e4dd6b8221942049?apiKey=873e47fe7796454e93671642132d9742&"
        alt=""
        className="flex justify-center items-center px-32 pb-64 max-md:px-5 mt-24  aspect-[1.54] "
      /> */}
    </div>
    </section>
  )
}
