import React from 'react'

export default function Flourishing() {
  return (
    <section className="flex justify-center items-center px-32 pt-20 max-md:px-5 bg-slate-200">

    <div className="flex justify-center w-full items-center py-9 bg-white rounded-[32px] max-md:px-5">
      <div className="w-full max-w-[908px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10">
              <h1 className="text-6xl font-kuano tracking-tighter text-blue-600 leading-[61px] max-md:text-4xl max-md:leading-10">
                We are the <span className="text-blue-600">Flourishing</span> Church
              </h1>
              <p className="mt-3.5 text-base tracking-normal leading-6 text-black">
                Who we are Who we are Who we are Who we areWho we areWho we are Who we are Who we areWho we are Who we areWho we areWho we are
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b922bb4a9cdd2c94089369f760cae1f578df86d0c53f2432acfe2af651efcb26?apiKey=873e47fe7796454e93671642132d9742&"
              alt="Church building"
              className="grow w-full aspect-[0.85] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
