import PropTypes from "prop-types";

function HeroImage({ src, alt, className }) {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
}

HeroImage.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

function HeroText({ title, description }) {
  return (
    <div className="flex flex-col self-start ml-10  mb-5 max-w-full w-4/5">
      <h1 className="text-7xl font-kuano tracking-tighter leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        {title}
      </h1>
      <p className="mt-8 text-base tracking-normal leading-6 max-md:max-w-full">
        {description}
      </p>
    </div>
  );
}

HeroText.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
};

// function HeroContent() {
//   return (
//     <div className="flex flex-col  self-end  mt-3 max-w-full w-3/5">
//       <h1 className="text-7xl tracking-tighter  leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
//         Invest in what you truly believe in
//       </h1>
//       <p className="mt-8 mb-8 text-base tracking-normal leading-6 max-md:max-w-full">
//         Who we are Who we are Who we are Who we are Who we are Who we are Who we
//         are Who we are Who we are Who we areWho we are Who we are Who we are Who
//         we are Who we are Who we areWho we are Who we are Who we are Who we are
//       </p>
//     </div>
//   );
// }

export default function Paysection() {
  const heroImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf619dcea7c79a0defaa97e7518ef603a63beeb23f496a1ddb9f2bd8a7c4e58d?apiKey=873e47fe7796454e93671642132d9742&",
      alt: "Hero image 1",
      className:
        "border-white border-solid aspect-[0.58] border-[5px] fill-emerald-500 stroke-[4.568px] stroke-white w-[42px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe11ca80106f144999b34b9f73d8513d89e7d6801d4ee9cc708274bb775dd8d0?apiKey=873e47fe7796454e93671642132d9742&",
      alt: "Hero image 2",
      className:
        "shrink-0 mt-28 border-white border-solid aspect-[0.61] border-[5px] fill-yellow-400 stroke-[5px] stroke-white w-[51px] max-md:mt-10",
    },
  ];

  const heroText = {
    title: "Invest in what you truly believe in",
    description:
      "Who we are Who we are Who we are Who we are Who we are Who we are Who we are Who we are Who we are Who we areWho we are Who we are Who we are Who we are Who we are Who we areWho we are Who we are Who we are Who we are",
  };

  return (
    <section className="flex justify-center items-center  pt-20 mb-5  px-32 max-md:px-5 bg-slate-200">
      <div className="flex justify-center items-center max-md:px-5 pt-6  text-black bg-white rounded-3xl max-md:flex-wrap">
        <div className="flex flex-col max-md:max-w-full">
          <HeroImage {...heroImages[0]} />
          <HeroText {...heroText} />
        </div>
        <HeroImage {...heroImages[1]} />
      </div>
    </section>
  );
}
