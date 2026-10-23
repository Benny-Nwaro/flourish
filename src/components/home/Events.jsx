import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
import { events } from "../../constants/data";
import prevIcon from "../../assets/figma/carousel-prev.svg";
import nextIcon from "../../assets/figma/carousel-next.svg";
import calendarIcon from "../../assets/figma/icon-calendar.svg";
import clockIcon from "../../assets/figma/icon-clock.svg";
import locationIcon from "../../assets/figma/icon-location.svg";

function Meta({ icon, children, gap = 7 }) {
  return (
    <div className="flex items-center" style={{ gap }}>
      <img src={icon} alt="" width={16.34} height={16.34} className="w-[16.34px] h-[16.34px] shrink-0" />
      <span className="text-trim font-redhat text-base leading-[1.43] tracking-[-0.01em]">{children}</span>
    </div>
  );
}

Meta.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  gap: PropTypes.number,
};

function EventCard({ title, description, src, date, time, location }) {
  return (
    <article className="flex flex-col gap-[47px] w-[300px] sm:w-[394px] shrink-0 text-black">
      <div className="relative h-[326px] sm:h-[426px] w-full overflow-hidden bg-black">
        <img
          loading="lazy"
          src={src}
          alt={title}
          className="absolute inset-0 size-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-[20px]">
        <h3 className="text-trim font-redhat font-black text-[30px] leading-[1.43] tracking-[-0.04em]">{title}</h3>
        {(date || time || location) && (
          <div className="flex flex-wrap gap-x-[34px] gap-y-[12px]">
            {date && <Meta icon={calendarIcon}>{date}</Meta>}
            {time && <Meta icon={clockIcon}>{time}</Meta>}
            {location && (
              <Meta icon={locationIcon} gap={5}>
                {location}
              </Meta>
            )}
          </div>
        )}
        <p className="text-trim font-redhat text-base leading-[1.43] tracking-[-0.01em]">{description}</p>
      </div>
    </article>
  );
}

EventCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
};

export default function Events() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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
    scrollRef.current?.scrollBy({
      left: direction === "right" ? 434 : -434,
      behavior: "smooth",
    });
  };

  const arrowClass = (enabled) =>
    `w-[79.65px] h-[58.05px] transition-opacity duration-200 ${enabled ? "" : "opacity-30 cursor-not-allowed"}`;

  return (
    <section className="bg-white">
      <div className="flex flex-col gap-[60px] py-[100px] xl:py-[150px] max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-between px-[20px] lg:px-[40px] xl:px-[150px]">
          <div className="flex flex-col items-start gap-[16px] max-w-[608px] text-black">
            <span className="bg-brandBlue/10 text-brandBlue text-caption rounded-[65.48px] px-[33.309px] py-[18.875px]">
              Events
            </span>
            <h2 className="text-h2">What’s Coming!</h2>
            <p className="text-body max-w-[600px]">
              Experience the joy of fellowship and personal growth at our
              upcoming events at the Flourish Nation Global , where deep
              connection and spiritual rejuvenation earnestly awaits you. Here,
              you will get a glimpse on our upcoming events, stay updated for
              what will come next!
            </p>
          </div>
          <div className="flex gap-[2.7px] shrink-0">
            <button type="button" onClick={() => scroll("left")} aria-label="Previous events" disabled={!canScrollLeft} className={arrowClass(canScrollLeft)}>
              <img src={prevIcon} alt="" width={79.65} height={58.05} />
            </button>
            <button type="button" onClick={() => scroll("right")} aria-label="Next events" disabled={!canScrollRight} className={arrowClass(canScrollRight)}>
              <img src={nextIcon} alt="" width={79.65} height={58.05} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-[40px] overflow-x-auto scroll-smooth pl-[20px] lg:pl-[40px] xl:pl-[150px] pr-[20px]"
          style={{ scrollbarWidth: "none" }}
        >
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
