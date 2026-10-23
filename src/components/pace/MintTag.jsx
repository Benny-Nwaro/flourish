import PropTypes from "prop-types";

export default function MintTag({ children }) {
  return (
    <span className="text-trim bg-mint text-greenSecondary font-stemBold text-[14px] leading-[0.93] tracking-[0.01em] rounded-[65.48px] px-[33.309px] py-[18.875px] whitespace-nowrap">
      {children}
    </span>
  );
}

MintTag.propTypes = { children: PropTypes.node.isRequired };
