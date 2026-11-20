import { useState } from "react";
import { testimonies as staticTestimonies } from "../../constants/data";
import { useSanityData } from "../../hooks/useSanityData";
import { testimoniesQuery } from "../../lib/sanity";
import prevIcon from "../../assets/figma/carousel-prev.svg";
import nextIcon from "../../assets/figma/carousel-next.svg";

export default function Testimonies() {
  const { data: testimonies } = useSanityData(testimoniesQuery, staticTestimonies);
  const [current, setCurrent] = useState(0);
  const isFirst = current === 0;
  const isLast = current === testimonies.length - 1;
  const { testimony, name, img } = testimonies[current];

  const arrowClass = (enabled) =>
    `w-[79.65px] h-[58.05px] transition-opacity duration-200 ${enabled ? "" : "opacity-30 cursor-not-allowed"}`;

  return (
    <section className="bg-brandBlue rounded-[5px] overflow-hidden">
      <div className="flex flex-col gap-[43px] px-[20px] lg:px-[40px] xl:px-[150px] py-[64px] md:py-[100px] max-w-[1440px] mx-auto">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-h2-md text-white">Our Vision</h2>
          <div className="flex gap-[2.7px] shrink-0">
            <button type="button" onClick={() => setCurrent(current - 1)} disabled={isFirst} aria-label="Previous testimony" className={arrowClass(!isFirst)}>
              <img src={prevIcon} alt="" width={79.65} height={58.05} />
            </button>
            <button type="button" onClick={() => setCurrent(current + 1)} disabled={isLast} aria-label="Next testimony" className={arrowClass(!isLast)}>
              <img src={nextIcon} alt="" width={79.65} height={58.05} />
            </button>
          </div>
        </div>

        <div key={current} className="fade-in flex flex-col items-start gap-[40px] md:gap-[66px] bg-cardBlue rounded-[22px] px-[24px] py-[40px] md:px-[99px] md:py-[92px]">
          <p className="text-trim font-redhat text-[24px] md:text-[36px] leading-[1.43] tracking-[-0.01em] text-white">
            {testimony}
          </p>
          <div className="flex items-center gap-[19px] bg-brandBlue rounded-[49px] pl-[8px] pr-[24px] md:pr-[52px] py-[8px] max-w-full">
            <div className="relative w-[59.22px] h-[58.634px] shrink-0 overflow-hidden rounded-full bg-white flex items-center justify-center">
              {img ? (
                <img src={img} alt="" className="absolute inset-0 size-full object-cover" />
              ) : (
                <span className="font-stemBold text-[22px] text-brandBlue">{name.charAt(0)}</span>
              )}
            </div>
            <p className="text-trim font-stemMedium text-[20px] leading-[1.43] tracking-[-0.01em] text-white md:whitespace-nowrap">
              {name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
