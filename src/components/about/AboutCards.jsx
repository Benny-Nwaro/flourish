import PropTypes from "prop-types";
import churchImage from "../../assets/figma/about-church.jpg";
import visionImage from "../../assets/figma/about-vision.jpg";

function TextCard({ title, children }) {
  return (
    <div className="flex-1 min-w-0 flex flex-col justify-center gap-[24px] bg-white rounded-[32px] px-[30px] py-[50px] md:px-[112px] md:py-[93px] text-black">
      <h2 className="text-h2-md">{title}</h2>
      <p className="text-trim font-redhat text-[18px] md:text-[22px] leading-[1.51] tracking-[-0.01em]">{children}</p>
    </div>
  );
}

TextCard.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

// Image slot: 373px wide, crop offsets taken from the Figma frame
function ImageCard({ src, alt, imgClass, className = "" }) {
  return (
    <div className={`relative shrink-0 w-full md:w-[373px] h-[400px] md:h-auto md:min-h-[532px] md:self-stretch overflow-hidden rounded-[21px] ${className}`}>
      <img src={src} alt={alt} className={`absolute max-w-none ${imgClass}`} />
    </div>
  );
}

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imgClass: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const churchCrop = "w-[798.9px] h-[1033.7px] left-[-260.9px] object-cover";

export default function AboutCards() {
  return (
    <section className="flex flex-col gap-[55px] px-[20px] lg:px-[40px] xl:px-[150px] py-[100px] max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row gap-[24px] items-stretch">
        <TextCard
          title={
            <>
              We are the <span className="text-brandBlue">Flourishing</span> Church
            </>
          }
        >
          We are a community of believers with eternity set in our hearts who
          are true witnesses, who are being trained in wisdom, trained in wisdom
          and stature, favoured of the Lord and men, bound in love. We
          understand that we are empowered by the spirit as we step out to do
          kingdom purposes.
        </TextCard>
        <ImageCard src={churchImage} alt="Woman worshipping" imgClass={`${churchCrop} top-[-38.3px]`} />
      </div>

      <div className="flex flex-col md:flex-row gap-[24px] items-stretch">
        <ImageCard src={churchImage} alt="Woman worshipping" imgClass={`${churchCrop} top-[-48.3px]`} className="max-md:order-last" />
        <TextCard title="Our Mission">
          We are on a mission to make all men see, know and reflect Christ to
          our Generation.
        </TextCard>
      </div>

      <div className="flex flex-col md:flex-row gap-[24px] items-stretch">
        <TextCard
          title={
            <>
              Our
              <br />
              Vision
            </>
          }
        >
          We envision a generation separated unto God, effectively living out
          the Life of Christ in them.
        </TextCard>
        <ImageCard
          src={visionImage}
          alt="Smiling church members"
          imgClass="w-[794.13px] h-[612.755px] left-[-193.07px] top-[-15px] object-cover"
        />
      </div>
    </section>
  );
}
