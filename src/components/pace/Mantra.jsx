import mantraArrow from "../../assets/figma/mantra-arrow.svg";

export default function Mantra() {
  return (
    <section className="bg-pageGrey">
      <div className="relative flex flex-col md:flex-row md:items-stretch gap-[25px] xl:h-[393px] max-w-[1440px] mx-auto">
        <div className="flex items-center justify-center bg-white border-4 border-white md:rounded-r-[28px] max-md:rounded-[28px] max-md:mx-[20px] px-[40px] xl:px-[150px] py-[60px] xl:py-[142px] overflow-hidden">
          <h2 className="text-h2 text-black md:w-[273px]">His Mantra</h2>
        </div>
        <div className="flex-1 min-w-0 flex items-center bg-brandBlue border-5 border-white md:rounded-l-[27px] max-md:rounded-[27px] max-md:mx-[20px] pl-[30px] pr-[30px] md:pl-[99px] md:pr-[112px] py-[60px] xl:py-[101px]">
          <p className="text-h2 text-white max-w-[568px]">
            <span className="font-[200]">Follow </span>Jesus<span className="font-[200]"> and</span> Damn{" "}
            <span className="font-[200]">the </span>Consequences!!!
          </p>
        </div>
        <img
          src={mantraArrow}
          alt=""
          width={146.445}
          height={59.88}
          className="hidden xl:block absolute left-[501.78px] top-[162.78px] w-[146.445px] h-[59.88px] rotate-180 pointer-events-none"
        />
      </div>
    </section>
  );
}
