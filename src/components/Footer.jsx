import { Link } from "react-router";
import logo from "../assets/figma/logo-footer.svg";
import social from "../assets/figma/social.svg";

// Hit areas laid over the single Figma social-icons graphic (165px wide)
const socialLinks = [
  { label: "Facebook", href: "https://web.facebook.com/flourishnationglobal", left: 0 },
  { label: "X (Twitter)", href: null, left: 41 },
  { label: "LinkedIn", href: null, left: 83 },
  { label: "Instagram", href: "https://www.instagram.com/flourishgenerationchurch/", left: 124 },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-[20px] pt-[50px] bg-white">
      {/* QUICK LINKS AND FORM */}
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-[50px] lg:gap-[83px] items-start px-[20px] lg:px-[40px] xl:px-[150px] w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[18px] w-full lg:w-[321px] shrink-0 text-black">
          <img src={logo} alt="Flourish Generation Church" width={104} height={39} className="w-[104px] h-[39px]" />
          <p className="text-trim font-redhat text-base leading-[1.43] tracking-[-0.01em]">
            Experience the joy of fellowship and personal growth at our upcoming
            events at the Flourish Nation Global, where deep connection and
            spiritual rejuvenation earnestly awaits you. Here, you will get a
            glimpse on our upcoming events, stay updated for what will come
            next!
          </p>
        </div>
        <div className="flex flex-col gap-[18px] pt-[12px] shrink-0 font-redhat text-black">
          <p className="text-trim text-[18px] font-bold leading-[1.345] tracking-[-0.01em]">
            Quick Links
          </p>
          <div className="flex flex-col gap-[8px] text-base leading-[1.418] tracking-[-0.01em]">
            <Link to="/">Home</Link>
            <Link to="/whoweare">About</Link>
            <Link to="/aboutpace">About PACE</Link>
            <Link to="/give">Give</Link>
            <Link to="/expressions">Expressions</Link>
            <Link to="/sermons">Sermons</Link>
          </div>
        </div>
        <div className="flex flex-col gap-[17px] flex-1 min-w-0 w-full">
          <p className="font-redhat font-black text-[24px] leading-[1.17] tracking-[-0.025em] uppercase text-black">
            To get update on upcoming events and sermons
          </p>
          <form className="flex flex-col gap-[17px]">
            <div className="flex flex-col md:flex-row gap-[11px]">
              <input
                placeholder="First Name"
                aria-label="First Name"
                className="h-[80px] w-full min-w-0 pl-[30px] pr-[24px] bg-inputGrey font-redhat font-medium text-base leading-[1.01] tracking-[-0.01em] text-black placeholder:text-black outline-none focus:ring-2 focus:ring-brandBlue"
              />
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                className="h-[80px] w-full min-w-0 pl-[30px] pr-[24px] bg-inputGrey font-redhat font-medium text-base leading-[1.01] tracking-[-0.01em] text-black placeholder:text-black outline-none focus:ring-2 focus:ring-brandBlue"
              />
            </div>
            <button
              type="submit"
              className="w-fit rounded-[29.329px] bg-brandBlue px-[36px] py-[21px] font-stemBold text-base leading-[0.93] tracking-[0.01em] text-white hover:bg-lightBlue hover:text-brandBlue transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="w-full border-t border-borderGrey">
        <div className="flex flex-wrap gap-5 items-center justify-between px-[20px] lg:px-[40px] xl:px-[150px] py-[34px] max-w-[1440px] mx-auto text-black">
          <div className="flex gap-[6px] items-center whitespace-nowrap">
            <span className="font-prompt text-[22px]">&copy;</span>
            <p className="font-wix font-medium text-base leading-[20px] tracking-[0.005em]">
              Copyright Flourish Generation Church {new Date().getFullYear()}
            </p>
          </div>
          <div className="relative w-[165px] h-[21.372px]">
            <img src={social} alt="" width={165} height={21.372} className="block w-[165px] h-[21.372px]" />
            {socialLinks.map(({ label, href, left }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="absolute top-[-6px] h-[33px] w-[41px]"
                  style={{ left }}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
