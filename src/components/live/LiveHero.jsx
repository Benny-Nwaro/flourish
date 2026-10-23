import Navbar from "../Navbar";
import heroImage from "../../assets/figma/live-hero.jpg";
import playOuter from "../../assets/figma/play-outer.svg";
import playInner from "../../assets/figma/play-inner.svg";
import playTriangle from "../../assets/figma/play-triangle.svg";

const LIVE_URL = "https://www.youtube.com/@flourishgc_global/live";

export default function LiveHero() {
  return (
    <section className="relative overflow-hidden bg-black h-[560px] md:h-[700px] xl:h-[882px]">
      <div className="absolute inset-0 xl:inset-auto xl:left-[-13px] xl:top-[-45px] xl:w-[max(1664px,115.56%)] xl:aspect-[1664/1171]">
        <img src={heroImage} alt="Worshipper lifting his hands" className="absolute inset-0 size-full max-w-none object-cover" />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(49.4deg, rgba(0,0,0,0.61) 22.344%, rgba(0,0,0,0) 52.386%)" }}
        />
      </div>
      <Navbar light overlay />
      {/* Play button centred on the 1440 frame (Figma: 677,366) */}
      <a
        href={LIVE_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Watch the live stream on YouTube"
        className="group absolute left-1/2 top-1/2 xl:top-[366px] -translate-x-1/2 -translate-y-1/2 xl:translate-y-0 xl:ml-[-4px] w-[152px] h-[151px]"
      >
        <img src={playOuter} alt="" width={152} height={151} className="absolute inset-0 w-[152px] h-[151px] animate-pulse" />
        <img
          src={playInner}
          alt=""
          width={106.047}
          height={105.453}
          className="absolute left-[22.95px] top-[22.77px] w-[106.047px] h-[105.453px] transition-transform duration-200 group-hover:scale-105"
        />
        <img src={playTriangle} alt="" width={23.566} height={27} className="absolute left-[67px] top-[60px] w-[23.566px] h-[27px]" />
      </a>
    </section>
  );
}
