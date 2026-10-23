import { Link } from "react-router";
import PropTypes from "prop-types";

const variants = {
  blue: "bg-brandBlue text-white font-stemBold hover:bg-lightBlue hover:text-brandBlue",
  light: "bg-lightBlue text-brandBlue font-redhat font-bold hover:bg-brandBlue hover:text-white",
  white: "bg-white text-black font-redhat font-extrabold hover:bg-lightBlue hover:text-brandBlue",
};

// Pill-shaped call-to-action from the Figma button style (61px tall, 18.6px label)
export default function PillLink({ to, variant = "blue", className = "", children }) {
  return (
    <Link
      to={to}
      className={`${variants[variant]} ${className} inline-flex shrink-0 items-center justify-center h-[61px] px-[42px] rounded-[58.975px] text-[18.612px] leading-[0.93] tracking-[0.01em] whitespace-nowrap transition-colors duration-200`}
    >
      {children}
    </Link>
  );
}

PillLink.propTypes = {
  to: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["blue", "light", "white"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
