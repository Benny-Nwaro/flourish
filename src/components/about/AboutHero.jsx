import Navbar from "../Navbar";
import heroImage from "../../assets/figma/about-hero.jpg";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-black min-h-[640px] xl:h-[835px] flex flex-col justify-end">
      <img
        src={heroImage}
        alt="Worship leader ministering on stage"
        className="absolute max-w-none inset-0 size-full object-cover xl:inset-auto xl:left-0 xl:top-[-451px] xl:h-auto xl:w-[max(1747px,121.32%)] xl:aspect-[1747/1397]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent xl:hidden" />
      <Navbar light overlay />
      <div className="relative w-full max-w-[1440px] mx-auto px-[20px] lg:px-[40px] xl:pl-[150px] xl:pr-[118px] pt-[160px] pb-[48px] md:pb-[80px] xl:pb-[123px]">
        <div className="flex flex-col items-start gap-[18px]">
          <span className="bg-lightBlue text-brandBlue text-caption rounded-[65.48px] px-[33.309px] py-[18.875px]">
            The Family of Flourish GC
          </span>
          <h1 className="text-h2 text-white max-w-[527px]">Eternity is set in our hearts</h1>
          <p className="text-trim font-stemRegular text-base leading-[1.43] tracking-[-0.01em] text-white max-w-[520px]">
            Experience the joy of fellowship and personal growth at our upcoming
            events at the Flourish Generation Church, where deep connection and
            spiritual rejuvenation earnestly awaits you. Here, you will get a
            glimpse of our upcoming events, stay updated for what will come next!
          </p>
        </div>
      </div>
    </section>
  );
}
