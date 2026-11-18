import PillLink from "../PillLink";
import pastorImage from "../../assets/figma/pastor-bg.jpg";

export default function MeetPastor() {
  return (
    <section className="relative overflow-hidden bg-brandBlue border-x-4 border-t-4 border-white min-h-[620px] md:min-h-[800px] flex items-start">
      <img
        src={pastorImage}
        alt="Pastor Ama Chinecherem Ebenezer preaching"
        className="absolute max-w-none h-auto w-[max(1521.4px,105.65%)] right-[-57.1px] top-[-37.2px]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00105a]/85 to-transparent xl:hidden" />
      <div className="relative w-full max-w-[1440px] mx-auto px-[20px] lg:px-[40px] xl:pl-[134px] pt-[80px] md:pt-[175.23px] pb-[60px]">
        <div className="flex flex-col items-start gap-[23px] max-w-[439px] text-white">
          <h2 className="text-h2">Meet our Pastor</h2>
          <p className="text-body">
            Pastor Ama Chinecherem Ebenezer (PACE) is the Lead Pastor and Founder
            of Flourish Nation Global where he lives out and expresses his
            profound passion of seeing that a generation is separated and
            preserved unto God, effectively living out the Life of Christ in
            them; built and equipped to walk in their God-given purpose.
          </p>
          <PillLink to="/aboutpace" variant="white">
            About our Pastor
          </PillLink>
        </div>
      </div>
    </section>
  );
}
