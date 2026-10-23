import { useState } from "react";
import { testimonies } from "../../constants/data";
import chevronLeft from "../../assets/figma/chevron-left.svg";
import chevronRight from "../../assets/figma/chevron-right.svg";

export default function LiveTestimonies() {
  const [current, setCurrent] = useState(0);
  const isFirst = current === 0;
  const isLast = current === testimonies.length - 1;
  const { testimony, name, img } = testimonies[current];

  return (
    <section className="bg-pageGrey rounded-[5px] overflow-hidden">
      <div className="flex flex-col items-center gap-[43px] px-[20px] lg:px-[40px] xl:p-[150px] py-[100px] max-w-[1440px] mx-auto">
        <div key={current} className="fade-in flex flex-col items-start gap-[66px] w-full max-w-[1140px] bg-white rounded-[22px] px-[24px] py-[40px] md:px-[99px] md:py-[92px]">
          <p className="text-trim font-redhat text-[24px] md:text-[36px] leading-[1.43] tracking-[-0.01em] text-black">{testimony}</p>
          <div className="flex items-center gap-[19px]">
            <div className="relative w-[59.22px] h-[58.634px] shrink-0 overflow-hidden rounded-full bg-black flex items-center justify-center">
              {img ? (
                <img src={img} alt="" className="absolute inset-0 size-full object-cover" />
              ) : (
                <span className="font-stemBold text-[22px] text-white">{name.charAt(0)}</span>
              )}
            </div>
            <p className="text-trim font-stemMedium text-[20px] leading-[1.43] tracking-[-0.01em] text-black">{name}</p>
          </div>
        </div>
        <div className="flex justify-end w-full max-w-[1140px]">
          <button
            type="button"
            onClick={() => setCurrent(current - 1)}
            disabled={isFirst}
            aria-label="Previous testimony"
            className={`relative w-[45.938px] h-[42px] rounded-l-[8px] ${isFirst ? "bg-[#c3c3c3] cursor-not-allowed" : "bg-black"}`}
          >
            <img src={chevronLeft} alt="" width={38.063} height={38.063} className="absolute left-[2.94px] top-[1.97px] w-[38.063px] h-[38.063px] rotate-180 -scale-y-100" />
          </button>
          <button
            type="button"
            onClick={() => setCurrent(current + 1)}
            disabled={isLast}
            aria-label="Next testimony"
            className={`relative w-[45.938px] h-[42px] rounded-r-[8px] ${isLast ? "bg-[#c3c3c3] cursor-not-allowed" : "bg-black"}`}
          >
            <img src={chevronRight} alt="" width={38.063} height={38.063} className="absolute left-[4.94px] top-[1.97px] w-[38.063px] h-[38.063px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
