import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
import { Arrow } from "../svg/svg";
import { events } from "../constants/data";

const EventCard = ({ title, date, location, time, description }) => (
  <div className="flex flex-col gap-[47px] text-base hover:bg-gray-700/10 rounded-2xl hover:pb-5 hover:p-2.5 tracking-normal leading-6 text-black w-[448px] transition-all duration-300 ease-in-out shrink-0">
    <div className="flex overflow-hidden relative rounded-lg flex-col items-end px-16 pt-3 pb-20 w-full min-h-[426px]">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7696e8f660f689a6baf202535294d3e69cf94695163cd3895ccabcd303b2f78c?apiKey=873e47fe7796454e93671642132d9742&"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="absolute right-4 flex items-center justify-center p-[8.97px] bg-greenSecondary rounded-[35.88px] text-[#EFF5FF] font-stemBold text-[16.7px] leading-[143%] tracking-[-1%]">
        Up next
      </div>
    </div>

    <div className="flex flex-col gap-[20px]">
      <h3 className="text-[40.73px] tracking-[-1%] leading-[143%] font-stemBold max-md:max-w-full">
        {title}
      </h3>
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2edc6f237f334f4475ac8953a9960df2654ac3b9871f47144da804ed37d4ae7?apiKey=873e47fe7796454e93671642132d9742&"
              alt="Calendar icon"
              className="shrink-0 w-4 aspect-square"
            />
            <div className="my-auto font-stemRegular">{date}</div>
          </div>
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/500bf02f33815cb98e44edca6be19298d10cbe964584fe027da4a7e715aec9ba?apiKey=873e47fe7796454e93671642132d9742&"
              alt="Location icon"
              className="shrink-0 w-4 aspect-square"
            />
            <div className="my-auto font-stemRegular">{location}</div>
          </div>
        </div>
        <div className="flex gap-2 self-start whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd18ef82053dd585197772922b595b1b5f44246bb179a1a9cd61a834ff2b609?apiKey=873e47fe7796454e93671642132d9742&"
            alt="Clock icon"
            className="shrink-0 aspect-[1.06] w-[17px]"
          />
          <div className="my-auto font-stemRegular">{time}</div>
        </div>
      </div>
      <p className="leading-[143%] tracking-[-1%] max-md:max-w-full font-stemRegular">
        {description}
      </p>
    </div>
  </div>
);

export default function WhatsComing() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Update arrow states
  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col py-[150px] gap-[60px] bg-white">
      <section className="flex min-[500px]:px-[60px] px-[30px] md:px-[80px] xl:px-[150px] flex-col gap-4 min-[700px]:flex-row min-[500px]:justify-between items-end">
        <div className="flex flex-col self-start h-full gap-[16px] min-[700px]:w-1/2 ">
          <div className="justify-center flex flex-col items-center py-[18.88px] text-sm font-extrabold tracking-[1%] w-fit leading-[93%] text-brandBlue whitespace-nowrap bg-brandBlue/10 font-redhat rounded-[65.48px] px-[33.31px]">
            Events
          </div>

          <h1 className="md:text-[76px] tracking-[-2.5%] font-dmserif text-black leading-[98%] w-fit text-7xl">
            What&apos;s Coming
          </h1>

          <p className=" w-fit justify-center text-lg tracking-[-1%] leading-[151%] text-black font-stemRegular">
            Experience the joy of fellowship and personal growth at our upcoming
            events at the Flourish Nation Global , where deep connection and
            spiritual rejuvenation earnestly awaits you. Here, you will get a
            glimpse of our upcoming events, stay updated for what will come
            next!
          </p>
        </div>
        <div className="flex justify-between items-center gap-[2.7px]">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            disabled={!canScrollLeft}
            className={`flex justify-center items-center rounded-[95.61px] w-[79.65px] h-[58.05px] transition-colors duration-200 ${
              canScrollLeft ? "bg-black" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <Arrow />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            disabled={!canScrollRight}
            className={`flex justify-center items-center rounded-[95.61px] w-[79.65px] h-[58.05px] transition-colors duration-200 ${
              canScrollRight ? "bg-black" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <Arrow className={`rotate-180`} />
          </button>
        </div>
      </section>

      <div className="min-[500px]:pl-[60px] pl-[30px] md:pl-[80px] xl:pl-[150px]">
        <div
          className="flex gap-4 md:gap-8 overflow-x-auto scroll-smooth"
          ref={scrollRef}
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-[81px] h-full">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
};
