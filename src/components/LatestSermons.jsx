import React from 'react'

function Button({ children }) {
    return (
      <div className="flex relative justify-center items-center px-11 py-4 mt-5 mb-10 ml-16 w-40 max-w-full bg-blue-600 rounded-[58.975px] max-md:px-5 max-md:ml-2.5">
        {children}
      </div>
    );
  }
  

export default function LatestSermons() {
  return (
    <>
      <main className="flex  flex-col w-3/5 items-start p-20 min-h-[881px] max-md:px-5 max-md:max-w-full">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d9f51c5d5a5f1c8de43cd34fef0687759a0b12c75dc66770443bc2e907f0c0d?apiKey=873e47fe7796454e93671642132d9742&" alt="" className="object-cover absolute inset-0 size-full" />
    <section className="flex relative justify-center items-center px-8 py-5 mt-80 ml-16 max-w-full bg-indigo-100 rounded-[65.48px] w-[162px] max-md:px-5 max-md:mt-10 max-md:ml-2.5">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/714853265ee52d90143ca001c81a02ab942f978941345f6af9814e8ecc6a12a7?apiKey=873e47fe7796454e93671642132d9742&" alt="" className="w-full aspect-[10]" />
    </section>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a9d9515bfd63ffdc63857f6c5ae04fea0aca3bfc1241bc8d873b2ddfda1a9e?apiKey=873e47fe7796454e93671642132d9742&" alt="" className="mt-5 ml-16 max-w-full aspect-[4] w-[526px]" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d53d85efbab777ca5a99566c264abb4801adef867a76193206a2b260b8c8daf?apiKey=873e47fe7796454e93671642132d9742&" alt="" className="mt-5 ml-16 max-w-full aspect-[14.29] w-[534px]" />
    <section className="self-start mt-48 ml-20 text-7xl tracking-tighter text-black leading-[76.67399999999999px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      <h2>Latest Sermons</h2>
    </section>
    <Button>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/88d2b91e57a798cfcf25a96ee580ebbcfbe7b97bcd5f920a453914f97bf142eb?apiKey=873e47fe7796454e93671642132d9742&" alt="" className="w-full aspect-[5.88]" />
    </Button>
  </main>
 
    <p className="mt-2 ml-20 text-base tracking-normal leading-6 text-black w-[551px] max-md:max-w-full">
      Convinced of this, I know that I will remain and continue with you all, for your progress and joy in the faith
    </p>
    </>
  
  )
}
