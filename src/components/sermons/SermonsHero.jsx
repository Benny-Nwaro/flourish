import Navbar from "../Navbar";
import heroImage from "../../assets/figma/sermons-hero.jpg";
import globe from "../../assets/figma/globe.svg";

export default function SermonsHero() {
  return (
    <section className="relative overflow-hidden bg-black min-h-[640px] xl:h-[881px]">
      <img
        src={heroImage}
        alt="Worshipper lifting his hands"
        className="absolute max-w-none inset-0 size-full object-cover xl:inset-auto xl:left-[-13px] xl:top-[-45px] xl:h-auto xl:w-[max(1664px,115.56%)] xl:aspect-[1664/1171]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent xl:hidden" />
      <Navbar light overlay />
      <div className="relative h-full max-w-[1440px] mx-auto px-[20px] lg:px-[40px] xl:px-0 pt-[200px] pb-[80px] xl:p-0">
        <div className="hidden md:flex absolute right-[60px] xl:right-[236.5px] top-[542px] items-center justify-center w-[139.493px] h-[130.78px] pointer-events-none">
          <img src={globe} alt="" width={119.394} height={108.028} className="w-[119.394px] h-[108.028px] rotate-[-12.18deg]" />
        </div>
        <div className="relative flex flex-col items-start gap-[18px] max-w-[723px] xl:absolute xl:left-[157px] xl:top-[393px]">
          <span className="bg-lightBlue text-brandBlue text-caption rounded-[65.48px] px-[33.309px] py-[18.875px]">
            Bread of Life
          </span>
          <h1 className="text-h2 text-white">Over 150+ Sermons curated for your growth in the Spirit</h1>
          <p className="text-trim font-stemRegular text-base leading-[1.43] tracking-[-0.01em] text-white">
            This word of the Lord shall not depart from your mouth but thou shall
            meditate on it day and night. Our messages are curated to help you
            grow in fervency, in faith, in wisdom, in stature and in the
            knowledge of God.
          </p>
        </div>
      </div>
    </section>
  );
}
