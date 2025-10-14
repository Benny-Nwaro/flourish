import greenstar from "../assets/icons/halfgreenstar.png";
import yellowstar from "../assets/icons/yellowStar.png";
import line from "../assets/icons/expressionsLine.png";

export default function Paysection() {
  return (
    <section className="flex justify-center items-center px-[20px] md:px-[80px] xl:px-[150px]">
      <div className="flex flex-col justify-center gap-[30px] mt-20 pt-[150px] pb-[50px] rounded-[25px] relative bg-[#FAFAFA] h-full">
        <img
          loading="lazy"
          src={greenstar}
          alt=""
          className="absolute top-5 left-0 w-fit h-fit"
        />
        <div className="flex flex-col relative left-[20px] md:left-[80px] xl:left-[151px] top-1/3 gap-4 w-[90%] min-[500px]:w-[70%] xl:w-[50%]">
          <h1 className="md:text-[78.28px] font-dmserif tracking-[-2.5%] leading-[89%] text-6xl">
            Invest in what <br /> you truly <br /> believe in{" "}
          </h1>
          <p className=" tracking-[-1%] leading-[143%] text-black max-md:max-w-full font-dmserif">
            Who we are Who we are Who we are Who we are Who we are Who we are
            Who we are Who we are Who we are Who we areWho we are Who we are Who
            we are Who we are Who we are Who we areWho we are Who we are Who we
            are Who we are
          </p>
        </div>
        <img
          loading="lazy"
          src={yellowstar}
          alt=""
          className="w-fit h-fit absolute right-0 top-[156px]"
        />
        <img
          loading="lazy"
          src={line}
          alt=""
          className="w-fit h-fit absolute -right-0 top-[250px]"
        />
      </div>
    </section>
  );
}
