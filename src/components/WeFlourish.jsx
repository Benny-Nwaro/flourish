import React from 'react'

function AboutUs() {
    return (
      <div className="justify-center self-start px-8 py-5 text-sm tracking-normal leading-3 bg-indigo-100 rounded-[65.48px] max-md:px-5">
        About us
      </div>
    );
  }
  
  function Heading() {
    return (
      <h1 className="mt-5 text-7xl font-kuano tracking-tighter leading-[74px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        We are the <span className="text-blue-600">Flourishing</span> Church
      </h1>
    );
  }
  
  function Description() {
    return (
      <p className="mt-5 text-base tracking-normal leading-6 text-black max-md:max-w-full">
        Who we are Who we are Who we are Who we areWho we areWho we are Who we are Who we areWho we are Who we areWho we areWho we are
      </p>
    );
  }
  

export default function WeFlourish() {
  return (
    <section className="flex justify-center items-center pt-10 px-32 pb-10  max-md:px-5 bg-slate-200">
    <div className="flex flex-col items-start px-16 pt-20 pb-20 text-blue-600 bg-white rounded-3xl max-md:px-5">
      <div className="flex flex-col ml-5 max-w-full ">
        <AboutUs />
        <Heading />
        <Description />
      </div>
    </div>
    </section>
  )
}
