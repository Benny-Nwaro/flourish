import PropTypes from "prop-types";

function Stat({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[12px] bg-pageGrey h-[202.343px] px-[36.317px] py-[37.896px] w-full md:w-[303.981px]">
      <p className="text-h2 whitespace-nowrap">{value}</p>
      <p className="text-trim font-stemRegular text-[22px] md:text-[25.264px] leading-[1.19] tracking-[-0.01em] text-center">{label}</p>
    </div>
  );
}

Stat.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
};

export default function ExpressionsHero() {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="flex flex-col items-start gap-[37px] bg-pageGrey rounded-[25px] overflow-hidden px-[20px] lg:px-[40px] xl:px-[151px] pt-[60px] xl:pt-[58px] pb-[106px] text-black">
        <h1 className="text-h3 text-trim max-w-[573px]">
          Until the Gospel fills the earth <span className="text-brandBlue">as the waters cover the sea</span>
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between gap-[20px] w-full bg-white p-[20px] md:p-[37.298px]">
          <Stat value="8+" label="Countries" />
          <Stat value="300+" label="Members" />
          <Stat
            value="20+"
            label={
              <>
                Expressions
                <br />
                (Including cells)
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
