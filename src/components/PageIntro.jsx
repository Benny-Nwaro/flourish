import PropTypes from "prop-types";

// White intro panel with rounded bottom corners (Give, Become a member)
export default function PageIntro({ title, children }) {
  return (
    <section className="bg-white rounded-b-[25px] overflow-hidden">
      <div className="flex flex-col items-start gap-[7px] px-[20px] lg:px-[40px] xl:px-[150px] pt-[80px] xl:pt-[113px] pb-[100px] max-w-[1440px] mx-auto text-black">
        <h1 className="text-h2 max-w-[691px]">{title}</h1>
        {children && (
          <p className="text-trim font-stemRegular text-base leading-[1.43] tracking-[-0.01em] max-w-[691px]">{children}</p>
        )}
      </div>
    </section>
  );
}

PageIntro.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
};
