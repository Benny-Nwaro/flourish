import { Facebook, Instagram, LinkedIn, X } from "../svg/svg";
import orangestar from "../assets/icons/orangestar.png";
import bluestar from "../assets/icons/fullbluestar.png";

export default function Social() {
  return (
    <section className="flex justify-center items-center px-[20px] md:px-[80px] xl:px-[150px] py-[150px]">
      <div className="flex flex-col relative z-10 justify-center items-center w-full bg-white  h-[380.34px] rounded-[28px] border-4 border-white border-solid px-[104px] py-[100px]">
        <div className="flex flex-col justify-center items-start">
          <p className="text-4xl font-dmserif tracking-[-2.5%] leading-[98%] text-black md:text-[48px] lg:w-[60%]">
            Click on icon to follow his social media and keep up
          </p>
          <div className="flex justify-between py-[14.96px] gap-[32px]">
            <a
              href=""
              className="cursor-pointer flex justify-center items-center bg-[#ECECEC] w-[46.42px] h-[46.42px] rounded-[6.19px]"
            >
              <Facebook />
            </a>
            <a
              href=""
              className="cursor-pointer flex justify-center items-center bg-[#ECECEC] w-[46.42px] h-[46.42px] rounded-[6.19px]"
            >
              <X />
            </a>
            <a
              href=""
              className="cursor-pointer flex justify-center items-center bg-[#ECECEC] w-[46.42px] h-[46.42px] rounded-[6.19px]"
            >
              <LinkedIn />
            </a>
            <a
              href=""
              className="cursor-pointer flex justify-center items-center bg-[#ECECEC] w-[46.42px] h-[46.42px] rounded-[6.19px]"
            >
              <Instagram />
            </a>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe11ca80106f144999b34b9f73d8513d89e7d6801d4ee9cc708274bb775dd8d0?"
          className="absolute w-[55.19px] h-[55.19px] right-2 top-10"
        />
        <div className="flex justify-between items-center bottom-2 px-3 w-full absolute">
          <img
            src={orangestar}
            className="relative left-2 w-[61.69px] h-[59.01px]"
          />
          <img
            src={bluestar}
            className="relative right-24 w-[61.69px] h-[59.01px]"
          />
        </div>
      </div>
    </section>
  );
}
