import Navbar from "../Navbar";
import heroImage from "../../assets/figma/pace-hero.jpg";

export default function PaceHero() {
  return (
    <section className="relative overflow-hidden bg-black min-h-[640px] xl:h-[855px]">
      <img
        src={heroImage}
        alt="Pastor Ama Chinecherem Ebenezer"
        className="absolute max-w-none inset-0 size-full object-cover xl:inset-auto xl:left-[-32px] xl:top-[-108px] xl:w-[max(1836px,127.5%)] xl:h-[1292.041px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent xl:hidden" />
      <Navbar light overlay />
      <div className="relative max-w-[1440px] mx-auto px-[20px] lg:px-[40px] xl:px-0 pt-[260px] pb-[48px] md:pb-[80px] xl:p-0">
        <div className="flex flex-col items-start gap-[18px] max-w-[556px] xl:absolute xl:left-[151px] xl:top-[369px]">
          <span className="text-trim bg-lightBlue text-brandBlue font-stemBold text-[14px] leading-[0.93] tracking-[0.01em] rounded-[65.48px] px-[33.309px] py-[18.875px]">
            PACE
          </span>
          <h1 className="text-h2 text-white">Pst. Ama Chinecherem Ebenezer</h1>
        </div>
      </div>
    </section>
  );
}
