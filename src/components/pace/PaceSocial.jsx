import facebookTile from "../../assets/figma/social-tile-facebook.svg";
import xTile from "../../assets/figma/social-tile-x.svg";
import instagramTile from "../../assets/figma/social-tile-instagram.svg";
import youtubeTile from "../../assets/figma/social-tile-youtube.svg";

const accounts = [
  { icon: facebookTile, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61567849173562&mibextid=ZbWKwL" },
  { icon: xTile, label: "X", href: "https://x.com/amaebenezer?s=21" },
  { icon: instagramTile, label: "Instagram", href: "https://instagram.com/pst_ebenezerama" },
  { icon: youtubeTile, label: "YouTube", href: "https://youtube.com/@ebenezer_ama?feature=shared" },
];

export default function PaceSocial() {
  return (
    <section className="bg-pageGrey">
      <div className="flex flex-col items-start gap-[25px] px-[20px] lg:px-[40px] xl:px-[144px] py-[100px] max-w-[1440px] mx-auto">
        <h2 className="text-h3 text-trim text-black max-w-[636px]">Click on icon to follow his social media and keep up</h2>
        <div className="flex flex-wrap items-center gap-x-[24px] gap-y-[21px] py-[30.526px] w-full xl:justify-between">
          {accounts.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Pst Ebenezer Ama on ${label}`}
              className="flex items-center gap-[10px] h-[62px] bg-white rounded-[14px] pl-[6px] pr-[29px] py-[6px] transition-transform duration-200 hover:-translate-y-1"
            >
              <img src={icon} alt="" width={50} height={50} className="w-[50px] h-[50px] shrink-0" />
              <span className="text-trim font-redhat font-black text-[20px] leading-[1.12] tracking-[-0.04em] text-black whitespace-nowrap">
                Pst Ebenezer Ama
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
