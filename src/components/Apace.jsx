import pace2 from "../assets/images/aboutpace2.png";
export default function Apace() {
  return (
    <div className="flex justify-center items-center px-[20px] md:px-[80px] xl:px-[150px] py-20 w-full  max-md:max-w-full">
      <div className=" w-full max-w-[1112px] max-md:my-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={pace2}
              alt="Pastor Ama Chinecherem Ebenezer"
              className=" w-full h-full aspect-[0.9] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow self-stretch text-black gap-[32px] max-md:max-w-full">
              <div className="justify-center flex flex-col items-center py-[18.88px] tracking-[1%] w-fit leading-[93%] whitespace-nowrap bg-[#E3FFF2] rounded-[65.48px] px-[33.31px]">
                <p className="font-stemBold text-greenSecondary text-sm">
                  {" "}
                  The Church with Eternity in view{" "}
                </p>
              </div>
              <div className=" md:text-[78.28px] font-dmserif tracking-[-2.5%] leading-[98%] max-md:max-w-full text-6xl">
                About PACE
              </div>
              <div className=" tracking-[-1%] font-stem leading-[143% max-md:max-w-full">
                Pastor Ama Chinecherem Ebenezer is a young man with an ancient
                heart, whose desires is to catch them young for God.
                <br />
                His food is Evangelism and his heart Cry is that all men will be
                saved from the bondage of addictions and sinful cravings !!!
                <br />
                <br />
                He has organised life changing programs like viz:
                <br />
                Online / Offline Bible studies, reaching out to the poor and
                needy via alms giving, organised healing and deliverances
                services, educative, Business and Health meetings, street
                Evangelism and outreaches, conferences / camping for young /
                Old, prayer walk and mountain Experience with intensive prayers
                and fasting etc.
                <br />
                <br />
                Pastor Ama Chinecherem Ebenezer has used his platform to touch
                lives and many testimonies and Miracles birthed forth through
                his life as a yielding vessel by the help of God.
                <br />
                <br />
                He is an anointed Music minister, Mentor, Teacher and Pastor to
                many in Enugu, within Nigeria and in diaspora...... <br />
                <br />
                Pastor Ama Chinecherem Ebenezer is a mobile Testimony !!!!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
