import PropTypes from "prop-types";
import book from "../assets/icons/book.png";
import radar from "../assets/icons/radar.png";
import people from "../assets/icons/people.png";
function ApproachCard({ img, title, desc }) {
  return (
    <div className="flex flex-col justify-center py-[67px] h-[518px]  px-[65px] gap-[10px] bg-white rounded-[14px]">
      <img loading="lazy" src={img} className="w-[41px] h-[41px] " />
      <h1 className="text-[32px] font-extrabold tracking-[-1%] leading-[93%] font-redhat">
        {title}
      </h1>
      <p className=" tracking-[-1%] leading-[143%] font-redhat">{desc}</p>
    </div>
  );
}

ApproachCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default function Approach() {
  return (
    <section className="flex justify-center items-center px-[20px] md:px-[80px] xl:px-[150px] py-[150px] bg-[#F2F2F2]">
      <div className="flex flex-col gap-[64px] justify-center items-start">
        <div className="flex flex-col gap-[16px] lg:w-[661px]">
          <p className="md:text-[78.28px] font-dmserif tracking-[-2.5%] leading-[98%] text-6xl">
            Our Approach
          </p>
          <p className="font-stemRegular tracking-[-1%] leading-[143%]">
            Who we are Who we areWho we areWho we areWho we areWho we areWho we
            areWho we areWho we areWho we areWho we areWho we areWho we areWho
            we areWho we areWho we areWho we areWho we areWho we areWho we are
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-[32px] justify-between items-center">
          <ApproachCard
            img={book}
            title="The Word of God & Prayer"
            desc="Who we are Who we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we are"
          />
          <ApproachCard
            img={people}
            title="Fellowship"
            desc="Who we are Who we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we are"
          />
          <ApproachCard
            img={radar}
            title="Breaking of Bread"
            desc="Who we are Who we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we areWho we are"
          />
        </div>
      </div>
    </section>
  );
}
