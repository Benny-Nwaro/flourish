import React from 'react'

function HeroSection() {
  return (
    <section className="flex justify-center items-center px-16 py-20 max-md:px-5 bg-slate-200">
      <div className="mt-16 w-full max-w-[1140px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
              <h1 className="text-7xl tracking-tighter leading-[70px] max-md:max-w-full max-md:text-4xl font-serif max-md:leading-10">
                Invest in what you truly believe in
              </h1>
              <p className="mt-8 text-base tracking-normal leading-6 font-serif max-md:max-w-full">
                At the Flourish Nation Global, we believe that everything we have ultimately belongs to God and that we are stewards entrusted with managing his resources wisely. By putting our money where our faith is, we prioritise using our financial resources in ways that honour God and partner with him for the advancement of his Kingdom.
              </p>
              <button className="justify-center self-start px-11 py-4 mt-8 text-xl font-serif tracking-normal leading-4 text-white bg-blue-600 rounded-[58.975px] max-md:px-5">
                Give now
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center rounded-mid max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f6c1564ed1dc78f95fcdaa01d8c71d7cafc2c00de7bb4fa0a9f59d0d71ec9a?apiKey=873e47fe7796454e93671642132d9742&"
                alt="Flourish Nation Global"
                className="w-full aspect-[0.95] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Invest() {
  return (
    <main>
      <HeroSection />
    </main>
  )
}
