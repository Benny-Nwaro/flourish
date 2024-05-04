import React from 'react'


function PaceLabel() {
    return (
      <div className="relative justify-center px-8 py-5 mt-72 ml-24 text-sm tracking-normal leading-3 text-blue-600 whitespace-nowrap bg-indigo-100 rounded-[65.48px] max-md:px-5 max-md:mt-10 max-md:ml-2.5">
        PACE
      </div>
    );
  }
  
  function Title() {
    return (
      <h1 className="relative mt-5 ml-24 text-7xl tracking-tighter text-white leading-[74px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Pst. Ama Chinecherem Ebenezer
      </h1>
    );
  }
  
  function Description() {
    return (
      <p className="relative mt-5 mb-16 ml-24 text-base tracking-normal leading-6 text-white w-[556px] max-md:mb-10 max-md:max-w-full">
        Who we are Who we are Who we are Who we areWho we areWho we are Who we are Who we areWho we are Who we areWho we areWho we are
      </p>
    );
  }

export default function PstAma() {
  return (
    <section className="flex flex-col justify-center bg-white rounded-3xl">
    <div className="flex overflow-hidden relative flex-col items-start p-20 w-full min-h-[881px] max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b6d17fb5fe81a30c07f123ed3711a5dd6c382eb170857b0ec7cd459b0b37757?apiKey=873e47fe7796454e93671642132d9742&" alt="" className="object-cover absolute inset-0 size-full" />
      <PaceLabel />
      <Title />
      <Description />
    </div>
  </section>
);
  
}
