import React from 'react'

function ProfileImage({ src, className }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt="Profile"
      className={`self-end mr-35 max-w-full border-8 border-white border-solid aspect-[1.09] rounded-2xl fill-blue-600 stroke-[8.1px] stroke-white w-[110px] max-md:mr-2.5 ${className}`}
    />
  );
}

function HeroImage({ src, className }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt="Hero"
      className={` w-full rounded-2xl border-white border-solid aspect-[1.43] border-[14px] max-w-[1149px] max-md:mt-10 max-md:max-w-full ${className}`}
    />
  );
}

export default function Location() {
  return (
    <div className="flex flex-col pb-20 bg-slate-200 rounded-2xl max-md:pb-5">
      {/* <ProfileImage src="ext_0}}" /> */}
      <main className="flex justify-center items-center px-32 rounded-2xl w-full max-md:px-5  max-md:max-w-full">
        <HeroImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/af3f0c1d4cab168f0d771975bb72d5f665b92ffae9c45cc2e09608175aef2c41?apiKey=873e47fe7796454e93671642132d9742&" />
      </main>
    </div>
  )
}
