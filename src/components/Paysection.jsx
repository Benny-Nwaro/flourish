import React from 'react'


function HeroImage({ src, alt }) {
    return (
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="border-white border-solid aspect-[0.58] border-[5px] fill-emerald-500 stroke-[4.568px] stroke-white w-[42px]"
      />
    );
  }

  function HeroContent() {
    return (
      <div className="flex flex-col self-end px-5 mt-3 max-w-full w-[528px]">
        <h1 className="text-7xl tracking-tighter leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Invest in what you truly believe in
        </h1>
        <p className="mt-8 text-base tracking-normal leading-6 max-md:max-w-full">
          Who we are Who we are Who we are Who we are Who we are Who we are Who
          we are Who we are Who we are Who we areWho we are Who we are Who we are
          Who we are Who we are Who we areWho we are Who we are Who we are Who we
          are
        </p>
      </div>
    );
  }

export default function Paysection() {
  return (
    <section className="flex justify-center items-center  py-20 max-md:px-5 bg-slate-200">
      <div className="flex flex-col max-md:max-w-full">
        <HeroImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf619dcea7c79a0defaa97e7518ef603a63beeb23f496a1ddb9f2bd8a7c4e58d?apiKey=873e47fe7796454e93671642132d9742&" alt="Hero Image 1" />
        <HeroContent />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe11ca80106f144999b34b9f73d8513d89e7d6801d4ee9cc708274bb775dd8d0?apiKey=873e47fe7796454e93671642132d9742&"
        alt="Hero Image 2"
        className="shrink-0 my-auto border-white border-solid aspect-[0.61] border-[5px] fill-yellow-400 stroke-[5px] stroke-white w-[51px]"
      />
    </section>
  )
}
