import React from 'react'

function CountryCard({ count, label }) {
    return (
      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow justify-center items-center px-9 py-10 w-full text-center text-black whitespace-nowrap rounded-xl bg-stone-50 max-md:px-5 max-md:mt-10">
          <div className="text-7xl tracking-tighter leading-[70.547px] max-md:text-4xl">
            {count}
          </div>
          <div className="mt-1 text-2xl tracking-tight leading-9">{label}</div>
        </div>
      </div>
    );
  }

export default function Gospel() {
    const countryData = [
        { count: 5, label: "Countries" },
        { count: "50K", label: "Members" },
        { count: 20, label: "Expressions" },
      ];
    
      return (
        <main className="flex flex-col pt-6 pb-12 rounded-3xl bg-neutral-50">
          <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf619dcea7c79a0defaa97e7518ef603a63beeb23f496a1ddb9f2bd8a7c4e58d?apiKey=873e47fe7796454e93671642132d9742&"
                alt=""
                className="border-white border-solid aspect-[0.58] border-[5px] fill-emerald-500 stroke-[4.568px] stroke-white w-[42px]"
              />
              <div className="flex flex-col self-end px-5 mt-14 max-w-full w-[573px] max-md:mt-10">
                <h1 className="text-7xl tracking-tighter text-blue-600 leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  Until the Gospel fills the earth{" "}
                  <span className="text-blue-600">
                    as the waters cover the sea
                  </span>
                </h1>
                <p className="mt-7 text-base tracking-normal leading-6 text-black max-md:max-w-full">
                  Who we are Who we are Who we are Who we are Who we are Who we are
                  Who we are Who we are Who we are Who we areWho we are Who we are
                  Who we are Who we are Who we are Who we areWho we are Who we are
                  Who we are Who we are
                </p>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe11ca80106f144999b34b9f73d8513d89e7d6801d4ee9cc708274bb775dd8d0?apiKey=873e47fe7796454e93671642132d9742&"
              alt=""
              className="shrink-0 self-start mt-28 border-white border-solid aspect-[0.61] border-[5px] fill-yellow-400 stroke-[5px] stroke-white w-[51px] max-md:mt-10"
            />
          </div>
          <section className="justify-between self-center p-9 mt-16 w-full bg-white rounded-3xl max-w-[1063px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {countryData.map((data, index) => (
                <CountryCard key={index} count={data.count} label={data.label} />
              ))}
            </div>
          </section>
        </main>
      );
}
