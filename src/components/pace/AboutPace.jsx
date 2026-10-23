import MintTag from "./MintTag";
import mainImage from "../../assets/figma/pace-about-main.jpg";
import insetImage from "../../assets/figma/flourish-inset.png";

export default function AboutPace() {
  return (
    <section className="bg-pageGrey">
      <div className="flex flex-col lg:flex-row items-center gap-[60px] xl:gap-[74px] px-[20px] lg:px-[40px] xl:p-[150px] py-[100px] xl:min-h-[956px] max-w-[1440px] mx-auto">
        <div className="relative w-[548px] h-[608px] shrink-0 max-sm:[zoom:0.62]">
          <div className="absolute left-[3.5px] top-0 w-[540.5px] h-[608.612px] overflow-hidden rounded-[21px] bg-[#dcdcdc]">
            <img
              src={mainImage}
              alt="Pastor Ama Chinecherem Ebenezer ministering"
              className="absolute max-w-none w-[629.485px] h-[839.313px] left-[-53px] top-[-106px] object-cover -scale-x-100"
            />
          </div>
          <div className="absolute left-[245.5px] top-[365px] w-[320px] h-[271px] overflow-hidden rounded-[15px] bg-brandBlue border-10 border-white">
            <img
              src={insetImage}
              alt="Pastor Ama Chinecherem Ebenezer smiling"
              className="absolute max-w-none w-[531px] h-[545px] left-[-106px] top-[-157px] object-bottom -scale-x-100"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-[16px] flex-1 min-w-0 text-black">
          <MintTag>The Church with Eternity in View</MintTag>
          <h2 className="text-h2">About PACE</h2>
          <div className="text-trim font-stemRegular text-base leading-[1.43] tracking-[-0.01em]">
            <p>Pastor Ama Chinecherem Ebenezer is a young man with an ancient heart, whose desires is to catch them young for God.</p>
            <p>His food is Evangelism and his heart Cry is that all men will be saved from the bondage of addictions and sinful cravings !!!</p>
            <br />
            <p>He has organised life changing programs like viz:</p>
            <p>
              Online / Offline Bible studies, reaching out to the poor and needy via alms giving, organised healing and
              deliverances services, educative, Business and Health meetings, street Evangelism and outreaches,
              conferences / camping for young / Old, prayer walk and mountain Experience with intensive prayers and
              fasting etc.
            </p>
            <br />
            <p>
              Pastor Ama Chinecherem Ebenezer has used his platform to touch lives and many testimonies and Miracles
              birthed forth through his life as a yielding vessel by the help of God.
            </p>
            <br />
            <p>He is an anointed Music minister, Mentor, Teacher and Pastor to many in Enugu, within Nigeria and in diaspora......</p>
            <br />
            <p>Pastor Ama Chinecherem Ebenezer is a mobile Testimony !!!!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
