import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { sermons as staticSermons } from "../../constants/data";
import { useSanityData } from "../../hooks/useSanityData";
import { sermonsQuery } from "../../lib/sanity";
import searchIcon from "../../assets/figma/icon-search.svg";
import headphoneIcon from "../../assets/figma/icon-headphone.svg";
import downloadIcon from "../../assets/figma/icon-document-download.svg";
import nextIcon from "../../assets/figma/icon-arrow-square-right.svg";

const PAGE_SIZE = 9;

function IconLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-[46.157px] px-[8.392px] py-[6.294px] rounded-[23.079px] border-[0.699px] border-brandBlue hover:bg-lightBlue transition-colors duration-200"
    >
      <img src={icon} alt="" width={16.785} height={16.785} className="w-[16.785px] h-[16.785px]" />
    </a>
  );
}

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

function SermonCard({ img, title, audioLink, downloadLink }) {
  return (
    <article className="flex flex-col gap-[26px] bg-white rounded-[20px] pt-[12px] px-[12px] pb-[29px] w-full">
      <img
        loading="lazy"
        src={img}
        alt={`${title} flier`}
        className="w-full h-[396px] rounded-[14.927px] object-cover"
      />
      <div className="flex flex-col gap-[20px] px-[20px]">
        <h3 className="text-trim font-stemBold text-[24px] leading-[0.93] tracking-[0.01em] text-black">{title}</h3>
        <div className="flex gap-[5.685px]">
          {audioLink && <IconLink href={audioLink} icon={headphoneIcon} label={`Listen to ${title}`} />}
          {downloadLink && <IconLink href={downloadLink} icon={downloadIcon} label={`Download ${title}`} />}
        </div>
      </div>
    </article>
  );
}

SermonCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  audioLink: PropTypes.string,
  downloadLink: PropTypes.string,
};

export default function SermonList() {
  const { data: sermons } = useSanityData(sermonsQuery, staticSermons);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => sermons.filter((s) => s.title.toLowerCase().includes(query.trim().toLowerCase())),
    [query, sermons]
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section className="flex flex-col gap-[45px] px-[20px] lg:px-[40px] xl:px-[150px] py-[64px] md:py-[100px] max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-[243px]">
        <h2 className="text-h3 text-trim text-black whitespace-nowrap">Latest Sermons</h2>
        <label className="flex w-full md:flex-1 items-center gap-[10px] h-[64px] min-w-0 bg-white border-[1.5px] border-black rounded-[11px] pl-[36px] pr-[22px] focus-within:ring-2 focus-within:ring-brandBlue">
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search"
            aria-label="Search sermons"
            className="flex-1 min-w-0 bg-transparent outline-none font-stemRegular text-[20px] leading-[1.43] tracking-[-0.01em] text-black placeholder:text-black"
          />
          <img src={searchIcon} alt="" width={23} height={23.767} className="w-[23px] h-[23.767px] shrink-0" />
        </label>
      </div>

      {visible.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[45px]">
          {visible.map((sermon) => (
            <SermonCard key={sermon.title} {...sermon} />
          ))}
        </div>
      ) : (
        <p className="font-redhat text-[20px] text-black">No sermons match “{query}”.</p>
      )}

      <nav aria-label="Sermon pages" className="flex items-center gap-[11px]">
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setPage(n)}
            aria-current={n === page ? "page" : undefined}
            className={`flex items-center justify-center min-w-[35px] h-[35px] p-[10px] rounded-[5px] bg-white font-stemBold text-base leading-[0.93] tracking-[0.01em] text-[#a5a5a5] ${
              n === page ? "border-2 border-[#a5a5a5]" : "hover:text-black"
            }`}
          >
            {n}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          disabled={page === pageCount}
          aria-label="Next page"
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <img src={nextIcon} alt="" width={24} height={24} className="w-[24px] h-[24px]" />
        </button>
      </nav>
    </section>
  );
}
