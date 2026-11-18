import PillLink from "../PillLink";

export default function GiveCta() {
  return (
    <section className="flex justify-center px-[20px] py-[64px] md:py-[100px] xl:p-[150px]">
      <div className="flex flex-col items-center gap-[32px] max-w-[712px] text-center text-black">
        <h2 className="text-h2">
          <span className="text-brandBlue">Give</span> to the Flourish Generation Church
        </h2>
        <p className="text-trim font-stemRegular text-base leading-[1.43] tracking-[-0.01em]">
          By putting our money where our faith is, we prioritise using our
          financial resources in ways that honour God and partner with him for
          the advancement of his Kingdom.
        </p>
        <PillLink to="/give">Give now</PillLink>
      </div>
    </section>
  );
}
