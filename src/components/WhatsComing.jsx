import React from 'react'

const EventCard = ({ image, title, date, location, time, description }) => (
    <div className="flex flex-col text-base tracking-normal leading-6 text-black max-md:max-w-full">
      <div className="flex overflow-hidden relative rounded-lg flex-col items-end px-16 pt-3 pb-20 w-full min-h-[426px]">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative justify-center p-2.5 mb-56 bg-emerald-500 rounded-[35.882px]">
        Up next
      </div>
    </div>
      <h3 className="mt-12 text-4xl tracking-tight max-md:mt-10 font-serif max-md:max-w-full">{title}</h3>
      <div className="flex flex-wrap gap-5 justify-between content-start mt-5">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2edc6f237f334f4475ac8953a9960df2654ac3b9871f47144da804ed37d4ae7?apiKey=873e47fe7796454e93671642132d9742&" alt="Calendar icon" className="shrink-0 w-4 aspect-square" />
            <div className="my-auto font-serif">{date}</div>
          </div>
          <div className="flex gap-1.5 mt-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/500bf02f33815cb98e44edca6be19298d10cbe964584fe027da4a7e715aec9ba?apiKey=873e47fe7796454e93671642132d9742&" alt="Location icon" className="shrink-0 w-4 aspect-square" />
            <div className="my-auto font-serif">{location}</div>
          </div>
        </div>
        <div className="flex gap-2 self-start font-serif whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd18ef82053dd585197772922b595b1b5f44246bb179a1a9cd61a834ff2b609?apiKey=873e47fe7796454e93671642132d9742&" alt="Clock icon" className="shrink-0 aspect-[1.06] w-[17px]" />
          <div className="my-auto">{time}</div>
        </div>
      </div>
      <p className="mt-5 leading-6 max-md:max-w-full font-serif">{description}</p>
    </div>
  );
  
  const EventCardPlaceholder = () => (
    <div className="flex flex-col max-md:max-w-full font-serif">
      <div className="shrink-0 bg-black rounded-2xl h-[426px] max-md:max-w-full" />
      <h3 className="mt-12 text-4xl tracking-tight text-black leading-[58.63px] max-md:mt-10 max-md:max-w-full">WHY CHURCH</h3>
      <div className="flex flex-wrap gap-5 justify-between content-start mt-5 w-full max-md:max-w-full">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <div className="flex flex-col justify-center">
              <div className="shrink-0 h-4" />
            </div>
            <div className="my-auto text-base tracking-normal leading-6 text-black">Sunday, 20th December, 2024</div>
          </div>
          <div className="flex gap-1.5 mt-3">
            <div className="flex flex-col justify-center">
              <div className="shrink-0 h-4" />
            </div>
            <div className="my-auto text-base tracking-normal leading-6 text-black">Mater Purisima Event Centre</div>
          </div>
        </div>
        <div className="flex gap-2 self-start">
          <div className="flex flex-col justify-center">
            <div className="z-10 shrink-0 h-[17px]" />
          </div>
          <div className="my-auto text-base tracking-normal leading-6 text-black">8:00am</div>
        </div>
      </div>
      <p className="mt-5 text-base tracking-normal leading-6 font-serif text-black max-md:max-w-full">
        Attending church provides spiritual nourishment, as emphasized in Matthew 4:4: &quot;Man shall not live by bread alone, but by every word that comes from the mouth of God.&quot;{" "}
      </p>
    </div>
  );
  
  const events = [
    {
      image: <div className="justify-center p-2.5 mb-56 bg-emerald-500 rounded-[35.882px] max-md:mb-10">Up next</div>,
      title: "WHY CHURCH",
      date: "Sunday, 20th December, 2024",
      location: "Mater Purisima Event Centre",
      time: "8:00am",
      description: "Attending church provides spiritual nourishment, as emphasized in Matthew 4:4: \"Man shall not live by bread alone, but by every word that comes from the mouth of God.\" ",
    },
    {
      image: <div className="justify-center p-2.5 mb-56 bg-emerald-500 rounded-[35.882px] max-md:mb-10">Up next</div>,
      title: "WHY CHURCH",
      date: "Sunday, 20th December, 2024",
      location: "Mater Purisima Event Centre",
      time: "8:00am",
      description: "Attending church provides spiritual nourishment, as emphasized in Matthew 4:4: \"Man shall not live by bread alone, but by every word that comes from the mouth of God.\" ",
    },
    {
      image: <div className="justify-center p-2.5 mb-56 bg-emerald-500 rounded-[35.882px] max-md:mb-10">Up next</div>,
      title: "WHY CHURCH",
      date: "Sunday, 20th December, 2024",
      location: "Mater Purisima Event Centre",
      time: "8:00am",
      description: "Attending church provides spiritual nourishment, as emphasized in Matthew 4:4: \"Man shall not live by bread alone, but by every word that comes from the mouth of God.\" ",
    },
        {
      image: <div className="justify-center p-2.5 mb-56 bg-emerald-500 rounded-[35.882px] max-md:mb-10">Up next</div>,
      title: "WHY CHURCH",
      date: "Sunday, 20th December, 2024",
      location: "Mater Purisima Event Centre",
      time: "8:00am",
      description: "Attending church provides spiritual nourishment, as emphasized in Matthew 4:4: \"Man shall not live by bread alone, but by every word that comes from the mouth of God.\" ",
    },
  
 
 
  ];
  

export default function WhatsComing() {
  return (
    <div className="flex flex-col items-start p-20 px-32 bg-white max-md:px-5">
      <div className="justify-center px-8 py-5 mt-4 ml-5 text-sm font-bold tracking-normal leading-3 text-blue-600 whitespace-nowrap bg-blue-600 bg-opacity-10 rounded-[65.48px] max-md:px-5 max-md:ml-2.5">
        Events
      </div>
      <h1 className="mt-4 ml-5 text-7xl tracking-tighter font-kuano text-black leading-[76.67399999999999px] max-md:max-w-full max-md:text-4xl">What's Coming</h1>
      <p className="mt-4 ml-5 w-3/5 text-base tracking-normal leading-6 font-serif text-black  max-md:max-w-full">
        Experience the joy of fellowship and personal growth at our upcoming events at the Flourish Nation Global , where deep connection and spiritual rejuvenation earnestly awaits you. Here, you will get a glimpse on our upcoming events, stay updated for what will come next!
      </p>
      <div className="flex overflow-x-auto gap-10 justify-between self-center mt-16 max-w-full md:overflow-x-auto max-md:mt-10 max-md:ml-5 ">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
        {/* <EventCardPlaceholder /> */}
        
        
      </div>
    </div>
  )
}
