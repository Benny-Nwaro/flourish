import PropTypes from "prop-types";
import star from "../assets/icons/bluestar.png";
import { useEffect, useRef, useState } from "react";

function FlourishingCard({
  title1,
  title2,
  title3,
  className,
  description,
  imageUrl,
  alt,
  marginLeft,
  order,
  borderLine,
  imagePosition,
  textColor,
  side = "left",
  circleColor,
  connectBottom,
}) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate section scroll ratio (0 → 1)
      const visible =
        1 -
        Math.min(Math.max(rect.bottom / (windowHeight + rect.height), 0), 1);

      setProgress(visible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Extend travel distance slightly for smooth exit along curve
  const translateY = `${progress * 120}%`;

  return (
    <section ref={containerRef} className="my-20 flex justify-center relative">
      {/* Vertical dotted line + moving circle */}
      <div
        className={`absolute ${
          side === "left" ? "left-1 md:-left-10" : "right-1 md:-right-10"
        } top-0 bottom-0 flex justify-center`}
      >
        <div
          className="absolute left-1/2 transform -translate-x-1/2 border-l-2 border-dashed border-[#d1d1d1]"
          style={{
            height: "calc(100% + 80px)",
            borderImage:
              "repeating-linear-gradient(#d1d1d1 0 20px, transparent 20px 40px) 1",
          }}
        >
          {/* Moving circle */}
          <div
            className="absolute w-[20px] h-[20px] md:w-[40px] md:h-[40px] rounded-full bg-white flex items-center justify-center transition-transform ease-linear"
            style={{
              transform: `translate(-50%, ${translateY})`,
              transition: "transform 0.15s linear",
            }}
          >
            <div
              className={`w-[21.44px] h-[21.44px] rounded-full blur-[2px] ${circleColor}`}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div
        className={`bg-white w-[90%] min-[1300px]:w-full relative ${borderLine} rounded-[32px]`}
      >
        <div
          className={`${marginLeft} py-[10px] min-[500px]:py-[35px] flex flex-col lg:flex-row justify-between gap-[71px]`}
        >
          <div
            className={`flex ${order} flex-col gap-[14px] self-stretch my-auto lg:w-1/2`}
          >
            <h1 className="text-[64px] font-dmserif tracking-[-2.5%] leading-[95%] max-md:text-4xl">
              {title1} <span className={textColor}>{title2}</span> {title3}
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className={`${className}`}
            ></p>
          </div>
          <div className={`lg:w-1/2 ${imagePosition}`}>
            <img
              loading="lazy"
              src={imageUrl}
              alt={alt}
              className="w-[488px] h-[572px] rounded-[21px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Curved connector under the card */}
      {connectBottom && (
        <svg
          className="absolute top-[109%] lg:top-[110%] left-2 min-[750px]:-left-10 w-[98%] min-[750px]:w-[107%] h-[80px]"
          viewBox="0 0 100 80"
          preserveAspectRatio="none"
        >
          {/* Main straight dashed line */}
          <line
            x1="5"
            y1="40"
            x2="95"
            y2="40"
            stroke="#d1d1d1"
            strokeWidth="2"
            strokeDasharray="20 20"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Smooth curved ends */}
          {side === "left" ? (
            <>
              {/* Left smooth blend into horizontal line */}
              <path
                d="M0,8 Q3,40 6,40"
                fill="none"
                stroke="#d1d1d1"
                strokeWidth="2"
                strokeDasharray="20 20"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              {/* Right smooth blend into next vertical line */}
              <path
                d="M95,40 Q98,40 100,75"
                fill="none"
                stroke="#d1d1d1"
                strokeWidth="2"
                strokeDasharray="20 20"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </>
          ) : (
            <>
              {/* Left smooth upward curve */}
              <path
                d="M0,75 Q3,40 6,40"
                fill="none"
                stroke="#d1d1d1"
                strokeWidth="2"
                strokeDasharray="20 20"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              {/* Right smooth upward curve */}
              <path
                d="M95,40 Q98,40 100,8"
                fill="none"
                stroke="#d1d1d1"
                strokeWidth="2"
                strokeDasharray="20 20"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </>
          )}
        </svg>
      )}
    </section>
  );
}

FlourishingCard.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  marginLeft: PropTypes.string,
  order: PropTypes.string,
  borderLine: PropTypes.string,
  imagePosition: PropTypes.string,
  side: PropTypes.oneOf(["left", "right"]),
  circleColor: PropTypes.string,
  connectBottom: PropTypes.bool,
};

export default function Flourishing() {
  return (
    <section className="relative">
      <div className="absolute top-[25%] right-0">
        <img src={star} alt="line" className="w-fit h-fit" />
      </div>

      <section className="px-[20px] md:px-[80px] xl:px-[150px] pt-[20px] md:pt-[80px] xl:pt-[150px]">
        <div className="flex flex-col w-[90%] min-[500px]:w-full justify-center items-center">
          {/* Card 1 */}
          <FlourishingCard
            side="left"
            title1="We are the"
            title2="Flourishing"
            title3="Church"
            textColor="text-brandBlue"
            circleColor="bg-brandBlue drop-shadow-brandBlue"
            className="tracking-[-1%] leading-[143%] font-stemRegular"
            borderLine={
              "left-[10px] min-[550px]:left-[30px] min-[770px]:left-[50px] lg:left-[73px]"
            }
            marginLeft={
              "mx-[10px] min-[500px]:mx-0 min-[500px]:ml-[20px] min-[770px]:ml-[80px] lg:ml-[119px]"
            }
            imagePosition={"min-[500px]:mr-6 lg:mr-10"}
            description="Who we are Who we are Who we are Who we areWho we areWho we are Who we are Who we areWho we are Who we areWho we areWho we are Who we are Who we are Who we are Who we areWho we areWho we are Who we are Who we areWho we are Who we areWho we areWho we areWho we are Who we are Who we are Who we areWho we areWho we are Who we are Who we areWho we are Who we areWho we areWho we are"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b922bb4a9cdd2c94089369f760cae1f578df86d0c53f2432acfe2af651efcb26?apiKey=873e47fe7796454e93671642132d9742&"
            alt={"a girl kneeling to pray"}
            connectBottom
          />

          {/* Card 2 */}
          <FlourishingCard
            title1="Our Mission"
            marginLeft={
              "mx-[10px] min-[500px]:mr-[20px] min-[770px]:mr-[80px] lg:mr-[119px]"
            }
            order={"order-last min-[500px]:ml-6 lg:ml-0"}
            borderLine={
              "right-[10px] min-[500px]:mx-0 min-[550px]:right-[30px] min-[770px]:right-[50px] lg:right-[73px]"
            }
            imagePosition={"min-[500px]:ml-6 lg:ml-10"}
            circleColor="bg-greenSecondary"
            className="leading-[120%] font-redhat text-2xl"
            description="We are on a mission to raise a generation of <span class='font-bold'>True Witnesses</span>, trained in <span class='font-bold'>wisdom</span> and <span class='font-bold'>stature</span>, favoured of the <span class='font-bold'>Lord</span> and Men, <span class='font-bold'>Empowered by the Spirit</span> and <span class='font-bold'>Sent</span> for <span class='font-bold'>Kingdom Purpose.</span>"
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/dd738bc8bea8a555710d89985e91cb8f543ef701cb1cd89601ef0de85e02bf0b?apiKey=873e47fe7796454e93671642132d9742&"
            alt={"worship in church"}
            side="right"
            connectBottom
          />

          {/* Card 3 */}
          <FlourishingCard
            side="left"
            title1="Our"
            title2="Vision"
            marginLeft={
              "mx-[10px] min-[500px]:mx-0 min-[500px]:ml-[20px] min-[770px]:ml-[80px] lg:ml-[119px]"
            }
            borderLine={
              "left-[10px] min-[550px]:left-[30px] min-[770px]:left-[50px] lg:left-[73px]"
            }
            circleColor="bg-[#F9D000]"
            imagePosition={"min-[500px]:mr-6 lg:mr-10"}
            className="leading-[120%] font-redhat text-2xl"
            description="We envision a generation of <span class='font-bold'>separated unto God</span>, effectively living out the <span class='font-bold'>Life of Christ</span> in them."
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/931511afeff0db440130d2ddb7d61e1929063c6190009153ea1e36f9fa74a5fc?apiKey=873e47fe7796454e93671642132d9742&"
            alt={"a girl smiling"}
          />
        </div>
      </section>
    </section>
  );
}
