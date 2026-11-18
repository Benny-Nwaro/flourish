import PillLink from "../PillLink";
import heroImage from "../../assets/figma/hero-image.jpg";
import globe from "../../assets/figma/globe.svg";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-[40px] md:gap-[63px] px-[20px] lg:px-[40px] xl:px-[150px] pt-[60px] xl:pt-[81px] pb-[64px] md:pb-[100px] xl:pb-[150px] max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center gap-[30.794px] max-w-[712px] text-center text-black">
        <h1 className="text-h2">
          He has set <span className="text-brandBlue">eternity</span> in our hearts
        </h1>
        <p className="text-body">
          Experience the joy of fellowship and personal growth at our upcoming
          events at the Flourish Nation Global, where deep connection and
          spiritual rejuvenation earnestly awaits you. Here, you will get a
          glimpse on our upcoming events, stay updated for what will come next!
        </p>
        <div className="flex flex-wrap justify-center gap-[11px]">
          <PillLink to="/live">Watch Live</PillLink>
          <PillLink to="/whoweare" variant="light">
            Who we are
          </PillLink>
        </div>
      </div>

      <div className="relative w-full">
        <div className="relative aspect-[1140/603] overflow-hidden rounded-[20px] md:rounded-[37px]">
          <img
            src={heroImage}
            alt="Aerial view of a winding road through green hills"
            className="absolute max-w-none h-auto w-[125.81%] left-[-12.81%] top-[-28.52%]"
          />
        </div>
        {/* Globe badge overlapping the image's top-right corner */}
        <div className="absolute right-[22.5px] top-[-102.8px] hidden lg:flex items-center justify-center w-[139.493px] h-[130.78px] pointer-events-none">
          <img
            src={globe}
            alt=""
            width={119.394}
            height={108.028}
            className="w-[119.394px] h-[108.028px] rotate-[-12.18deg]"
          />
        </div>
      </div>
    </section>
  );
}
