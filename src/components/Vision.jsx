import React from 'react'

export default function Vision() {
  return (
    <section className="flex justify-center items-center px-16  max-md:px-5 bg-slate-200">
    <div className="flex relative gap-5 mt-36 mb-60 max-md:flex-wrap max-md:my-10 max-md:max-w-full">
      <div className="flex flex-col justify-center items-center self-start px-3 w-11 h-11 bg-white rounded-full">
        <div className="shrink-0 bg-yellow-400 rounded-full h-[22px] w-[22px]" />
      </div>
      <div className="flex flex-col grow shrink-0 justify-center items-end px-16 py-9 bg-white basis-0 rounded-[32px] w-fit max-md:px-5 max-md:max-w-full">
        <div className="max-w-full w-[945px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10">
                <div className="text-6xl tracking-tighter leading-[61px] max-md:text-4xl max-md:leading-10">
                  Our <br />
                  Vision
                  
                </div>
                <div className="mt-3.5 text-2xl tracking-tight leading-7">
                  <span className="text-black">We envision a generation </span>
                  <span className="font-bold text-black">
                    separated unto God
                  </span>
                  <span className="text-black">
                    , effectively living out the{" "}
                  </span>
                  <span className="font-bold text-black">Life of Christ</span>
                  <span className="text-black"> in them.</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center rounded-xl max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/931511afeff0db440130d2ddb7d61e1929063c6190009153ea1e36f9fa74a5fc?apiKey=873e47fe7796454e93671642132d9742&"
                  className="w-full aspect-[0.85] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
