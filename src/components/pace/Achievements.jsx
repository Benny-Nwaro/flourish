import MintTag from "./MintTag";
import achievementsImage from "../../assets/figma/pace-achievements.jpg";

export default function Achievements() {
  return (
    <section className="bg-[#fffefe]">
      <div className="flex flex-col lg:flex-row items-center gap-[40px] md:gap-[60px] xl:gap-[98px] px-[20px] lg:px-[40px] xl:p-[150px] py-[64px] md:py-[100px] xl:min-h-[956px] max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start gap-[16px] flex-1 min-w-0 text-black">
          <MintTag>The Church with Eternity in View</MintTag>
          <h2 className="text-h2 max-w-[522px]">Achievements</h2>
          <div className="text-trim font-stemRegular text-base leading-[1.43] tracking-[-0.01em]">
            <p>Over the years, Conferences has been held in the areas of viz....</p>
            <p>
              Health, Peer Pressure, Business, Academic excellence, Girl Child ( Molestation, Rape, organ and human
              trafficking), Spiritual growth, Politics etc.
            </p>
            <br />
            <p>Text books were given to people in rural areas....</p>
            <p>There was a Girl a Pad campaign held to reach out to young girls about their hygiene.</p>
            <p>Hospital visitation was also an important role flourish church never ignores.</p>
            <p>
              Over the years, our vision and goals is to finish the work God has given us in alignment to his mandate,
              because there is and urgency in the Spirit.
            </p>
          </div>
        </div>
        <div className="relative w-full max-w-[548px] aspect-[548/608] shrink-0">
          <div className="absolute inset-y-0 left-[0.64%] right-[0.73%] overflow-hidden rounded-[21px] bg-[#dcdcdc]">
            <img
              src={achievementsImage}
              alt="Congregation listening during a church meeting"
              className="absolute max-w-none w-[116.46%] h-[137.9%] left-[-9.81%] top-[-17.42%] object-cover -scale-x-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
