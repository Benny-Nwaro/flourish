import PillLink from "../PillLink";

export default function Vision() {
  return (
    <section className="bg-white/20">
      <div className="flex flex-col items-center justify-center gap-[32px] px-[20px] md:px-[80px] xl:px-[300px] py-[100px] xl:py-[171px] xl:min-h-[800px] max-w-[1440px] mx-auto text-center text-black">
        <div className="flex flex-col items-center gap-[16px]">
          <span className="bg-white text-brandBlue text-caption rounded-[65.48px] px-[33.309px] py-[18.875px]">
            Our Vision
          </span>
          <h2 className="text-h2">
            We envision a <span className="text-brandBlue">Generation</span> living out the life of Christ
          </h2>
          <p className="text-trim font-stemRegular text-base leading-[1.43] tracking-[-0.01em]">
            At the Flourish Nation Global, we are on a mission to raise a
            generation of True witnesses, trained in wisdom and stature,
            favoured of the Lord and Men, Empowered by the Spirit and sent for
            Kingdom Purpose.
          </p>
        </div>
        <PillLink to="/whoweare">About us</PillLink>
      </div>
    </section>
  );
}
