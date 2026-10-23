import PropTypes from "prop-types";
import MintTag from "../pace/MintTag";
import arrowRight from "../../assets/figma/icon-arrow-right-blue.svg";
import youtubeIcon from "../../assets/figma/stream-youtube.svg";
import facebookIcon from "../../assets/figma/stream-facebook.svg";
import mixlrDots from "../../assets/figma/mixlr-dots.png";

function PlatformCard({ title, cta, href, children }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      className="group relative block w-full lg:w-[359px] h-[530px] overflow-hidden rounded-[14px] bg-white"
    >
      {children}
      <div className="absolute left-[52px] top-[52.25px] flex flex-col items-start gap-[22px]">
        <h3 className="text-subheading uppercase text-black w-[164px]">{title}</h3>
        <span className="flex items-center gap-[16px]">
          <span className="text-trim font-stemRegular text-base leading-[1.43] tracking-[-0.01em] text-brandBlue whitespace-nowrap">
            {href ? cta : "Coming soon"}
          </span>
          {href && (
            <img src={arrowRight} alt="" width={24} height={24} className="w-[24px] h-[24px] transition-transform duration-200 group-hover:translate-x-1" />
          )}
        </span>
      </div>
    </Tag>
  );
}

PlatformCard.propTypes = {
  title: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  href: PropTypes.string,
  children: PropTypes.node,
};

export default function StreamingPlatforms() {
  return (
    <section className="bg-pageGrey">
      <div className="flex flex-col gap-[26px] px-[20px] lg:px-[40px] xl:p-[150px] py-[100px] max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start gap-[16px] max-w-[889px] text-black">
          <MintTag>Join us Live</MintTag>
          <h2 className="text-h2">Streaming Platforms</h2>
          <p className="text-trim font-stemRegular text-base leading-[1.43] tracking-[-0.01em]">
            We at the Flourish Generation Church believe that the word of God and prayer are essential in the growth of
            a solid believer.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[32px]">
          <PlatformCard title="Join us on Youtube" cta="Watch now" href="https://www.youtube.com/@flourishgc_global">
            <img src={youtubeIcon} alt="" width={379} height={349} className="absolute left-[136px] top-[225.25px] w-[379px] h-[349px] max-w-none" />
          </PlatformCard>
          <PlatformCard title="Join us on Mixlr" cta="Join us now">
            <div
              className="absolute left-[41px] top-[243.25px] w-[391px] h-[407px] bg-[#9f9f9f]"
              style={{
                maskImage: `url(${mixlrDots})`,
                maskSize: "349px 349px",
                maskPosition: "59px 32px",
                maskRepeat: "no-repeat",
                WebkitMaskImage: `url(${mixlrDots})`,
                WebkitMaskSize: "349px 349px",
                WebkitMaskPosition: "59px 32px",
                WebkitMaskRepeat: "no-repeat",
              }}
            />
          </PlatformCard>
          <PlatformCard title="Join us on Facebook" cta="Join us now" href="https://web.facebook.com/flourishnationglobal">
            <img src={facebookIcon} alt="" width={345} height={345} className="absolute left-[98px] top-[251.25px] w-[345px] h-[345px] max-w-none" />
          </PlatformCard>
        </div>
      </div>
    </section>
  );
}
