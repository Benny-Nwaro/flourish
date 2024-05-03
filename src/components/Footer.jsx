import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Footer() {
  return (
    <div className="flex flex-col justify-center pt-12 pb-2.5 bg-white">
    <div className="flex flex-col justify-between items-center px-16 pb-3.5 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between px-px w-full max-w-[1140px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col justify-between self-start text-sm tracking-normal leading-5 text-black">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6a47dfb9ae3e4bee0aa7f729b53eabbe5f66163892ef7af825e7cfbe5ae90ea1?apiKey=873e47fe7796454e93671642132d9742&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a47dfb9ae3e4bee0aa7f729b53eabbe5f66163892ef7af825e7cfbe5ae90ea1?apiKey=873e47fe7796454e93671642132d9742&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a47dfb9ae3e4bee0aa7f729b53eabbe5f66163892ef7af825e7cfbe5ae90ea1?apiKey=873e47fe7796454e93671642132d9742&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a47dfb9ae3e4bee0aa7f729b53eabbe5f66163892ef7af825e7cfbe5ae90ea1?apiKey=873e47fe7796454e93671642132d9742&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a47dfb9ae3e4bee0aa7f729b53eabbe5f66163892ef7af825e7cfbe5ae90ea1?apiKey=873e47fe7796454e93671642132d9742&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a47dfb9ae3e4bee0aa7f729b53eabbe5f66163892ef7af825e7cfbe5ae90ea1?apiKey=873e47fe7796454e93671642132d9742&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a47dfb9ae3e4bee0aa7f729b53eabbe5f66163892ef7af825e7cfbe5ae90ea1?apiKey=873e47fe7796454e93671642132d9742&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a47dfb9ae3e4bee0aa7f729b53eabbe5f66163892ef7af825e7cfbe5ae90ea1?apiKey=873e47fe7796454e93671642132d9742&"
            className="aspect-[2.27] backdrop-blur-[7.5px] w-[91px]"
          />
          <div className="mt-7 w-80 font-serif">
            Experience the joy of fellowship and personal growth at our
            upcoming events at the Flourish Nation Global, where deep
            connection and spiritual rejuvenation earnestly awaits you. Here,
            you will get a glimpse on our upcoming events, stay updated for
            what will come next!
          </div>
        </div>
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base tracking-normal leading-6 text-black font-[480] max-md:mt-10">
                <div className="text-lg font-semibold tracking-normal font-serif leading-6">
                  Quick Links
                </div>
                <div className='font-serif'>
                <Link to="/"><div className="mt-5">Home</div></Link>
                <Link to="whoweare"><div className="mt-5">About</div></Link>
                <Link to="aboutpace"><div className="mt-5 max-md:mr-1.5">About PACE</div></Link>
                <Link to="give"><div className="mt-5">Give</div></Link>
                <Link to="expressions"><div className="mt-5 max-md:mr-2">Expressions</div></Link>
                <Link to="sermons"><div className="mt-5">Sermons</div></Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base tracking-normal leading-6 text-black font-[480] max-md:mt-10">
                <div className="text-lg font-semibold tracking-normal font-serif leading-6">
                  Quick Links
                </div>
                <div className='font-serif'>
                <Link to="/"><div className="mt-5">Home</div></Link>
                <Link to="whoweare"><div className="mt-5">About</div></Link>
                <Link to="aboutpace"><div className="mt-5 max-md:mr-1.5">About PACE</div></Link>
                <Link to="give"><div className="mt-5">Give</div></Link>
                <Link to="expressions"><div className="mt-5 max-md:mr-2">Expressions</div></Link>
                <Link to="sermons"><div className="mt-5">Sermons</div></Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base tracking-normal leading-6 text-black font-[480] max-md:mt-10">
                <div className="text-lg font-semibold tracking-normal font-serif leading-6">
                  Quick Links
                </div >
                <div className='font-serif'>
                <Link to="/"><div className="mt-5">Home</div></Link>
                <Link to="whoweare"><div className="mt-5">About</div></Link>
                <Link to="aboutpace"><div className="mt-5 max-md:mr-1.5">About PACE</div></Link>
                <Link to="give"><div className="mt-5">Give</div></Link>
                <Link to="expressions"><div className="mt-5 max-md:mr-2">Expressions</div></Link>
                <Link to="sermons"><div className="mt-5">Sermons</div></Link>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center px-16 py-7 mt-5 w-full border-t border-solid border-stone-300 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-w-[1140px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-1.5 text-black max-md:flex-wrap">
          <div className="text-2xl">©</div>
          <div className="my-auto text-base tracking-normal font-[480] max-md:max-w-full">
            Copyright Flourish Nation Global 2024
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ec4cf7f9a07142ad92f2384bd45e67a215712a049b17251b7fa3bc984a1888b?apiKey=873e47fe7796454e93671642132d9742&"
            className="shrink-0 self-stretch w-3.5 aspect-[0.52] fill-black"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb39a84d38558d22faf7b729eb5b16394e3d0e5b9d7a00e8cc0902aa6b4df2d5?apiKey=873e47fe7796454e93671642132d9742&"
            className="shrink-0 self-stretch my-auto aspect-[1.28] fill-black w-[27px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0444ddde8e3df57550a5ebb5fc2e4f151c0b0c8c4a3b118fa24b623265b307f5?apiKey=873e47fe7796454e93671642132d9742&"
            className="shrink-0 self-stretch my-auto aspect-square fill-black w-[23px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e269dfa2a6ee9590066322ffa7856d3ba4c3ff219f49bde3ec8e4f9ee11b845a?apiKey=873e47fe7796454e93671642132d9742&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square fill-black"
          />
        </div>
      </div>
    </div>
  </div>
  )
}
