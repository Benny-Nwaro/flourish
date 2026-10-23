import PropTypes from "prop-types";
import MintTag from "./MintTag";
import arrowRight from "../../assets/figma/icon-arrow-right-blue.svg";

function ProductCard({ title, titleWidth, href }) {
  const label = (
    <>
      <span className="text-trim font-stemRegular text-base leading-[1.43] tracking-[-0.01em] text-brandBlue whitespace-nowrap">
        {href ? "Check them out" : "Coming soon"}
      </span>
      {href && <img src={arrowRight} alt="" width={24} height={24} className="w-[24px] h-[24px] transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  );
  return (
    <div className="flex-1 min-w-0 flex flex-col items-start justify-center gap-[14px] bg-white rounded-[14px] px-[52px] py-[44px] overflow-hidden">
      <h3 className="text-subheading uppercase text-black" style={{ maxWidth: titleWidth }}>
        {title}
      </h3>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-[16px]">
          {label}
        </a>
      ) : (
        <div className="flex items-center gap-[16px]">{label}</div>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  titleWidth: PropTypes.number.isRequired,
  href: PropTypes.string,
};

export default function Products() {
  return (
    <section className="bg-pageGrey">
      <div className="flex flex-col gap-[36px] px-[20px] lg:px-[40px] xl:p-[150px] py-[100px] max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start gap-[16px] max-w-[889px] text-black">
          <MintTag>The Church with Eternity in View</MintTag>
          <h2 className="text-h2">His Products and Intellectual Properties</h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-stretch gap-[32px] w-full max-w-[1135px]">
          <ProductCard title="His Books" titleWidth={141} />
          <ProductCard title="Daily Devotionals" titleWidth={222} />
          <ProductCard title="His Sermons" titleWidth={222} href="https://t.me/FlourishNation" />
        </div>
      </div>
    </section>
  );
}
