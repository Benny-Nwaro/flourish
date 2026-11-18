import PropTypes from "prop-types";
import { useState } from "react";
import { expressions } from "../../constants/data";
import routingIcon from "../../assets/figma/icon-routing.svg";
import flagNigeria from "../../assets/figma/flag-nigeria.svg";
import flagUk from "../../assets/figma/flag-uk.svg";

const filters = [
  { name: "All" },
  { name: "UK", flag: flagUk, width: 31.057, height: 15.528 },
  { name: "Nigeria", flag: flagNigeria, width: 23.924, height: 23.924 },
];

function ExpressionCard({ name, type, address, mapUrl }) {
  return (
    <article className="bg-cardDark p-[30px] md:p-[40px] xl:p-[80px] w-full">
      <div className="flex flex-col items-start gap-[26px] text-white">
        <div className="flex items-center justify-center size-[61.225px] rounded-[9.996px] bg-iconBlue">
          <img src={routingIcon} alt="" width={37.484} height={37.484} className="w-[37.484px] h-[37.484px] translate-x-[0.62px] translate-y-[0.62px]" />
        </div>
        <span className="flex items-center justify-center bg-[#474747] rounded-[109px] px-[20px] py-[13px]">
          <span className="text-trim font-redhat text-[20px] leading-[1.51] tracking-[-0.01em] whitespace-nowrap">{type}</span>
        </span>
        <h3 className="text-subheading uppercase">{name}</h3>
        {address &&
          (mapUrl ? (
            <a href={mapUrl} target="_blank" rel="noreferrer" className="text-trim font-redhat text-[19px] md:text-[22px] xl:text-[28px] leading-[1.43] tracking-[-0.01em] hover:underline">
              {address}
            </a>
          ) : (
            <p className="text-trim font-redhat text-[19px] md:text-[22px] xl:text-[28px] leading-[1.43] tracking-[-0.01em]">{address}</p>
          ))}
      </div>
    </article>
  );
}

ExpressionCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  address: PropTypes.string,
  mapUrl: PropTypes.string,
};

export default function ExpressionList() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? expressions : expressions.filter((e) => e.country === active);

  return (
    <section className="bg-black rounded-[5px] overflow-hidden">
      <div className="flex flex-col items-center gap-[43px] px-[20px] lg:px-[40px] xl:px-[150px] py-[64px] md:py-[118px] max-w-[1440px] mx-auto">
        <h2 className="text-h2 text-white text-center max-w-[840px]">Our Expressions</h2>
        <div className="flex flex-wrap justify-center items-stretch gap-[20px]">
          {filters.map(({ name, flag, width, height }) => {
            const isActive = active === name;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setActive(name)}
                aria-pressed={isActive}
                className={`flex items-center justify-center gap-[8.544px] h-[54.684px] px-[28.196px] rounded-[58.101px] border-white transition-colors duration-200 ${
                  isActive ? "bg-white border-[1.709px] text-black" : "border text-white hover:bg-white/10"
                }`}
              >
                {name === "All" ? (
                  <span className="font-stemBold text-[17.089px] leading-[0.983] tracking-[-0.025em]">All</span>
                ) : (
                  <span className={`text-caption ${isActive ? "text-black" : "text-white"}`}>{name}</span>
                )}
                {flag && <img src={flag} alt="" width={width} height={height} style={{ width, height }} />}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[43px] w-full max-w-[1140px]">
          {visible.map((expression) => (
            <ExpressionCard key={expression.name} {...expression} />
          ))}
        </div>
      </div>
    </section>
  );
}
