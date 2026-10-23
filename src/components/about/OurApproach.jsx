import PropTypes from "prop-types";
import bookIcon from "../../assets/figma/icon-book.svg";
import peopleIcon from "../../assets/figma/icon-people.svg";
import radarIcon from "../../assets/figma/icon-radar.svg";

function ApproachCard({ icon, title, desc }) {
  return (
    <div className="flex items-center bg-white rounded-[14px] px-[30px] md:px-[65px] py-[36px] lg:h-[429px] overflow-hidden">
      <div className="flex flex-col items-start gap-[30px] lg:w-[229px]">
        <img src={icon} alt="" width={41} height={41} className="w-[41px] h-[41px]" />
        <h3 className="text-subheading uppercase text-black">{title}</h3>
        <p className="text-trim font-redhat text-base leading-[1.43] tracking-[-0.01em] text-black">{desc}</p>
      </div>
    </div>
  );
}

ApproachCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default function OurApproach() {
  return (
    <section className="bg-pageGrey">
      <div className="flex flex-col gap-[64px] px-[20px] lg:px-[40px] xl:px-[150px] py-[100px] max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] text-black">
          <h2 className="text-h2">Our Approach</h2>
          <p className="text-body">
            When we gather, we gather to share the word of God in prayer, we
            gather to enjoy a time of fellowship and we partake of the
            Lord&apos;s table.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
          <ApproachCard
            icon={bookIcon}
            title="The Word of God & Prayer"
            desc="The word of God is like the fuel that keeps the fire of a believer stocked and burning. We at the Flourish Generation Church believe that the word of God and prayer are essential in the growth of a solid believer."
          />
          <ApproachCard
            icon={peopleIcon}
            title="Fellowship"
            desc="We are not like they who forsake the gathering of brethren. We enjoy sharing fellowship with each other."
          />
          <ApproachCard
            icon={radarIcon}
            title="Breaking of Bread"
            desc="In remembrance of what Christ did for us on the cross of Calvary, we partake of his table in the breaking of bread and drinking of wine."
          />
        </div>
      </div>
    </section>
  );
}
