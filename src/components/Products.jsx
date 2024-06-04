import React from 'react'

export default function Products() {
  return (
    <div className="flex justify-center items-center px-32 py-20 w-full bg-zinc-100 mb-20 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mt-16 mb-10 w-full max-w-[1138px] max-md:mt-10 max-md:max-w-full">
        <div className="justify-center self-start px-8 py-5 text-sm tracking-normal leading-3 text-emerald-500 bg-emerald-50 rounded-[65.48px] max-md:px-5 max-md:max-w-full">
          The Church with Eternity in View
        </div>
        <div className="mt-4 text-7xl font-kuano tracking-tighter text-black leading-[77px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          His Products and Intellectual Properties
        </div>
        <div className="mt-4 text-base tracking-normal leading-6 text-black max-md:max-w-full">
          Who we are Who we areWho we areWho we areWho we areWho we areWho we
          areWho we areWho we areWho we areWho we areWho we areWho we areWho we
          areWho we areWho we areWho we areWho we areWho we areWho we are
        </div>
        <div className="px-0.5 mt-9 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center items-start px-16 py-16 mx-auto w-full bg-white rounded-2xl max-md:px-5 max-md:mt-8">
                <div className="text-4xl tracking-tighter leading-10 text-black">
                  His Books
                </div>
                <div className="flex gap-4 mt-3.5 text-base tracking-normal leading-6 text-blue-600">
                  <div className="my-auto">Check them out</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65b4799228ec6667a9c819947537c709980807fa97cc01435b34926214bc560?"
                    className="shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-16 py-16 mx-auto w-full bg-white rounded-2xl max-md:px-5 max-md:mt-8">
                <div className="text-4xl tracking-tighter leading-10 text-black">
                  Daily Devotionals
                </div>
                <div className="flex gap-4 pr-3 mt-3.5 text-base tracking-normal leading-6 text-blue-600">
                  <div className="my-auto">Check them out</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65b4799228ec6667a9c819947537c709980807fa97cc01435b34926214bc560?"
                    className="shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-16 py-16 mx-auto w-full bg-white rounded-2xl max-md:px-5 max-md:mt-8">
                <div className="text-4xl tracking-tighter leading-10 text-black">
                  His Sermons
                </div>
                <div className="flex gap-4 pr-3 mt-3.5 text-base tracking-normal leading-6 text-blue-600">
                  <div className="my-auto">Check them out</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65b4799228ec6667a9c819947537c709980807fa97cc01435b34926214bc560?"
                    className="shrink-0 w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
