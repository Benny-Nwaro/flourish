import React from 'react'

export default function Social() {
  return (
    <section className="flex justify-center items-center px-16  max-md:px-5 bg-slate-200">
    <div className="flex gap-5 justify-between self-center px-1 pt-7 pb-14 mt-20 w-full bg-white rounded-3xl border-4 border-white border-solid max-w-[1148px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27628be1602de2183a128fcabbae8c10bc55285c875088c310bc036c4ed50adb?"
          className="border-white border-solid aspect-[0.58] border-[5px] fill-blue-600 stroke-[4.568px] stroke-white w-[42px]"
        />
        <div className="flex flex-col self-end px-5 mt-24 max-w-full w-[591px] max-md:mt-10">
          <div className="text-5xl tracking-tighter leading-10 text-blue-600 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Click on icon to follow his social media and keep up
          </div>
          <div className="justify-between py-7 mt-4 max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/47a645514e67c493c9df75c9a5f1afd1d5f3109e08855f2b49f864675195b2e9?"
                  className="shrink-0 aspect-square fill-gray-200 w-[90px] max-md:mt-10"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffb5048c008da23bb11a314fbcadc2735719635755b456be96ac7afc1fc2fe5f?"
                  className="shrink-0 aspect-square fill-gray-200 w-[90px] max-md:mt-10"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1206f04c6e2f176f9f15431c91bd7ba88d9a13e9ed486d277fdd5945b081a25?"
                  className="shrink-0 aspect-square fill-gray-200 w-[90px] max-md:mt-10"
                />
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cc9d5feb30499ebec5221a703c133b1af14b153556280bacedc72456b488c4?"
                  className="shrink-0 aspect-square fill-gray-200 w-[90px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe11ca80106f144999b34b9f73d8513d89e7d6801d4ee9cc708274bb775dd8d0?"
        className="shrink-0 self-start mt-28 border-white border-solid aspect-[0.61] border-[5px] fill-yellow-400 stroke-[5px] stroke-white w-[51px] max-md:mt-10"
      />
    </div>
    </section>
  )
}
