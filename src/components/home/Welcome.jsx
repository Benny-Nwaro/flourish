import { Link } from "react-router";
import PropTypes from "prop-types";
import welcomeImage from "../../assets/figma/welcome-card.jpg";
import arrowBlack from "../../assets/figma/arrow-black.svg";
import arrowWhite from "../../assets/figma/arrow-white.svg";

function WelcomeCard({ title, to, dark = false, gap }) {
  return (
    <Link
      to={to}
      className={`${dark ? "bg-brandBlue text-white" : "bg-white text-black"} group relative flex flex-col overflow-hidden rounded-[20px] w-full lg:w-[550px] pb-[60px] lg:pb-0 lg:h-[679px]`}
    >
      <div className="relative aspect-[550/471] w-full shrink-0 overflow-hidden">
        <img
          src={welcomeImage}
          alt=""
          className="absolute max-w-none w-[123.27%] left-[-11.64%] top-[-23.73%] transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-start px-[30px] md:px-[62px] pt-[40px] lg:pt-[61.66px] w-full lg:w-[518px]" style={{ gap }}>
        <h3 className="text-subheading uppercase">{title}</h3>
        <div className="flex items-start gap-[19px]">
          <span className="text-body">Learn More</span>
          <img
            src={dark ? arrowWhite : arrowBlack}
            alt=""
            width={30.184}
            height={12.342}
            className="mt-[-0.66px] w-[30.184px] h-[12.342px] rotate-180 transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}

WelcomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  gap: PropTypes.number.isRequired,
};

export default function Welcome() {
  return (
    <section className="bg-sectionGrey">
      <div className="flex flex-col gap-[60px] px-[20px] lg:px-[40px] xl:px-[150px] py-[100px] xl:py-[150px] max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start gap-[16px] max-w-[608px] text-black">
          <span className="bg-brandBlue/10 text-brandBlue text-caption rounded-[65.48px] px-[33.309px] py-[18.875px]">
            Welcome to the Flourish Generation Church
          </span>
          <h2 className="text-h2">Welcome Home!</h2>
          <p className="text-body max-w-[600px]">
            Experience the joy of fellowship and personal growth at our upcoming
            events at the Flourish Nation Global , where deep connection and
            spiritual rejuvenation earnestly awaits you. Here, you will get a
            glimpse on our upcoming events, stay updated for what will come next!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap gap-[39px]">
          <WelcomeCard title="About us" to="/whoweare" gap={52} />
          <WelcomeCard title="Be part of our community" to="/become-a-member" dark gap={23} />
        </div>
      </div>
    </section>
  );
}
