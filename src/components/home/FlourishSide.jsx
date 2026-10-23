import PillLink from "../PillLink";
import mainImage from "../../assets/figma/flourish-main.jpg";
import insetImage from "../../assets/figma/flourish-inset.png";

export default function FlourishSide() {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-[60px] xl:gap-[98px] px-[20px] lg:px-[40px] xl:px-[150px] py-[100px] max-w-[1440px] mx-auto">
        {/* Photo collage: large portrait with an inset photo overlapping its bottom-right corner */}
        <div className="relative w-[482px] h-[608px] shrink-0 mr-[34.5px] lg:mr-0 max-sm:[zoom:0.66]">
          <div className="absolute inset-0 overflow-hidden bg-[#dcdcdc]">
            <img
              src={mainImage}
              alt="Worshipper praying during service"
              className="absolute max-w-none w-[629.485px] h-[839.313px] left-[-53px] top-[-106px] object-cover -scale-x-100"
            />
          </div>
          <div className="absolute left-[273.5px] top-[358.23px] w-[243px] h-[271px] overflow-hidden bg-brandBlue border-10 border-white">
            <img
              src={insetImage}
              alt="Smiling church member"
              className="absolute max-w-none w-[531px] h-[545px] left-[-144.5px] top-[-151.23px] object-bottom -scale-x-100"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-[32px] flex-1 min-w-0 text-black">
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-h2">We flourish on every side...</h2>
            <div className="text-body">
              <p>.....because God said to us &quot;Flourish!&quot;.</p>
              <p>
                We are a city set on a hill that cannot be hid, our leaves do not
                wither and everything we do prospers.
              </p>
              <p>&nbsp;</p>
              <p>
                We are like trees planted by the rivers of water, because we are a
                Flourishing Nation!
              </p>
            </div>
          </div>
          <PillLink to="/whoweare">About us</PillLink>
        </div>
      </div>
    </section>
  );
}
