import React from 'react'

export default function LivePst() {
  return (
    <main className="flex flex-col justify-center bg-white rounded-3xl">
    <section className="flex overflow-hidden relative flex-col justify-center pb-5 items-center px-16 py-20 w-full min-h-[868px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/70fc52d569db20779153d2736d7d9c9c827591436d4f43571f68b771aa045fcd?apiKey=873e47fe7796454e93671642132d9742&"
        className=" absolute inset-0 size-full"
        alt=""
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/33efa31c3bd01be1597afa41a9669545f483a4dd222b8999493dfc5930c672d0?apiKey=873e47fe7796454e93671642132d9742&"
        className="mt-72 mb-52 max-w-full aspect-[1.01] w-[152px] max-md:my-10"
        alt=""
      />
    </section>
  </main>
  )
}
