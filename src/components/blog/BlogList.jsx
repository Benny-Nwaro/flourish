import PropTypes from "prop-types";
import { blogPosts } from "../../constants/data";

function shareLinks(title) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const text = encodeURIComponent(`${title} ${url}`);
  return [
    { name: "Whatsapp", href: `https://wa.me/?text=${text}` },
    { name: "Instagram", href: "https://www.instagram.com/flourishgenerationchurch/" },
    { name: "Twitter", href: `https://twitter.com/intent/tweet?text=${text}` },
  ];
}

function BlogCard({ img, title }) {
  return (
    <article className="flex flex-col gap-[26px] bg-white rounded-[20px] pt-[12px] px-[12px] pb-[51px] w-full">
      <img loading="lazy" src={img} alt={title} className="w-full h-[396px] rounded-[14px] object-cover" />
      <div className="flex flex-col gap-[20px] px-[20px]">
        <h3 className="text-trim font-stemBold text-[24px] leading-[0.93] tracking-[0.01em] text-black">{title}</h3>
        <div className="flex flex-wrap gap-[5.685px]">
          {shareLinks(title).map(({ name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-[12px] rounded-[23.079px] border-[0.699px] border-[#b1b1b1] text-[#b1b1b1] hover:border-brandBlue hover:text-brandBlue transition-colors duration-200"
            >
              <span className="text-trim font-stemMedium text-[14px] leading-[0.93] tracking-[-0.005em] whitespace-nowrap">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

BlogCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default function BlogList() {
  return (
    <>
      <section className="px-[20px] lg:px-[40px] xl:px-[150px] py-[100px] max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[20px] max-w-[581px] text-black">
          <h1 className="text-h2">Blog</h1>
          <p className="text-trim font-stemRegular text-base leading-[1.43] tracking-[-0.01em]">
            Stories, teachings and updates from the Flourish Generation Church.
          </p>
        </div>
      </section>
      <section className="px-[20px] lg:px-[40px] xl:px-[150px] py-[100px] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[38px] gap-y-[42px]">
          {blogPosts.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </div>
      </section>
    </>
  );
}
