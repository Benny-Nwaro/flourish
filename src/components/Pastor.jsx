import React from 'react'
import { Link } from 'react-router-dom';


function PastorImage() {
    return (
      <div className="flex overflow-hidden relative flex-col rounded-full font-serif justify-center items-end px-16 pb-20 w-full min-h-[767px] max-md:pl-5 max-md:max-w-full">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfca2b6af4518b3bef82b890149decb852182d03c870a193ae8ec6cf74c11293?apiKey=873e47fe7796454e93671642132d9742&" alt="Pastor" className="object-cover absolute inset-0 size-full" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe11ca80106f144999b34b9f73d8513d89e7d6801d4ee9cc708274bb775dd8d0?apiKey=873e47fe7796454e93671642132d9742&"
          alt=""
          className="mt-1 mb-96 border-white border-solid aspect-[0.61] border-[5px] fill-yellow-400 stroke-[5px] stroke-white w-[51px] max-md:mb-10"
        />
      </div>
    );
  }
  
  function PastorInfo() {
    return (
      
      <div className="flex  flex-col self-stretch px-5 mt-5 text-white max-md:mt-10 max-md:max-w-full">
        <h1 className="text-7xl tracking-tighter font-kuano leading-[77px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Meet our Pastor
        </h1>
        <p className="mt-6 text-base tracking-normal leading-6 font-serif max-md:max-w-full">
          Pastor Ama Chinecherem Ebenezer (PACE) is the Lead Pastor and Founder of Flourish Nation Global where he lives
          out and expresses his profound passion of seeing that a generation is separated and preserved unto God,
          effectively living out the Life of Christ in them; built and equipped to walk in their God-given purpose.
        </p>
        <Link to="/aboutpace">
        <button className="justify-center hover:opacity-50 self-start px-11 py-4 mt-6 text-xl font-serif tracking-normal leading-4 text-white bg-emerald-500 rounded-[58.975px] max-md:px-5">
          About our Pastor
        </button></Link>
      </div>
    );
  }
  
export default function Pastor() {
  return (
       <section className="flex justify-center items-center mr-8 px-32 pb-20 bg-slate-200  max-md:px-5 max-md:mr-2">

    <div className="flex gap-5 bg-blue-600 rounded-3xl border-4 border-white border-solid max-md:flex-wrap">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf619dcea7c79a0defaa97e7518ef603a63beeb23f496a1ddb9f2bd8a7c4e58d?apiKey=873e47fe7796454e93671642132d9742&"
        alt=""
        className="shrink-0 self-start mt-6 rounded-md border-white border-solid aspect-[0.58] border-[5px] fill-emerald-500 stroke-[4.568px] stroke-white w-[42px]"
      />
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <PastorInfo />
          </div>
          <div className="flex flex-col ml-5 w-6/12 mr-5 mt-5 mb-5 rounded-md max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-end pt-11 w-full bg-emerald-500 max-md:max-w-full">
              <PastorImage />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
