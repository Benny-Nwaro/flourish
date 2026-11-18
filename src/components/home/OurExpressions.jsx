import PillLink from "../PillLink";
import routingIcon from "../../assets/figma/icon-routing.svg";
import flagNigeria from "../../assets/figma/flag-nigeria.svg";

export default function OurExpressions() {
  return (
    <section className="bg-black rounded-[5px] overflow-hidden">
      <div className="flex flex-col items-center gap-[43px] px-[20px] lg:px-[40px] xl:px-[150px] py-[64px] md:py-[118px] max-w-[1440px] mx-auto">
        <h2 className="text-h2 text-white text-center max-w-[840px]">Our Expressions</h2>

        <div className="flex items-center gap-[20px]">
          <span className="flex items-center justify-center h-[54.684px] px-[28.196px] rounded-[58.101px] bg-white border-[1.709px] border-white font-stemBold text-[17.089px] leading-[0.983] tracking-[-0.025em] text-black">
            All
          </span>
          <span className="flex items-center justify-center gap-[8.544px] px-[28.196px] py-[15.38px] rounded-[58.101px] border border-white text-caption text-white">
            Nigeria
            <img src={flagNigeria} alt="" width={23.924} height={23.924} className="w-[23.924px] h-[23.924px]" />
          </span>
        </div>

        <div className="w-full max-w-[1140px] bg-cardDark p-[30px] md:p-[60px] xl:p-[100px]">
          <div className="flex flex-col items-start gap-[26px] text-white">
            <div className="flex items-center justify-center size-[61.225px] rounded-[9.996px] bg-iconBlue">
              <img src={routingIcon} alt="" width={37.484} height={37.484} className="w-[37.484px] h-[37.484px] translate-x-[0.62px] translate-y-[0.62px]" />
            </div>
            <h3 className="text-trim font-stemBold text-[26px] md:text-[36px] xl:text-[42px] leading-[0.98] tracking-[-0.01em]">
              Flourish GC Enugu
            </h3>
            <a
              href="https://maps.app.goo.gl/gs7deNniRgcREiRa7"
              target="_blank"
              rel="noreferrer"
              className="text-trim font-redhat text-[19px] md:text-[28px] xl:text-[36px] leading-[1.43] tracking-[-0.01em] hover:underline"
            >
              Mater Purisima Event Centre, 187 Ogui Road, Just Opposite 4 Market
              Days Supermarket, China Town, Enugu, Enugu State
            </a>
          </div>
        </div>

        <PillLink to="/expressions">See more</PillLink>
      </div>
    </section>
  );
}
