import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";
import PropTypes from "prop-types";
import logo from "../assets/figma/logo.svg";
import logoWhite from "../assets/figma/logo-white.svg";
import menu from "../assets/images/icon-menu.svg";
import closeIcon from "../assets/images/icon-close-menu.svg";
import { NavLink } from "react-router";

const Logo = ({ light }) => (
  <Link to="/" className="shrink-0">
    <img
      src={light ? logoWhite : logo}
      alt="Flourish Generation Church"
      width={111}
      height={71}
      className="w-[111px] h-[71px]"
    />
  </Link>
);

const navItems = [
  { name: "Home", path: "/" },
  { name: "Who we are", path: "/whoweare" },
  { name: "Sermons", path: "/sermons" },
  { name: "About PACE", path: "/aboutpace" },
  { name: "Expressions", path: "/expressions" },
  { name: "Blogs", path: "/blogs" },
  { name: "Live", path: "/live" },
];

const NavMenu = ({ light }) => {

  return (
    <div className={`flex gap-2 xl:gap-5 items-center justify-between backdrop-blur-[10.5px] font-redhat text-base leading-[1.43] ${light ? "text-white" : "text-black"} whitespace-nowrap lg:w-[719px] h-[71px] py-[25px] px-[20px] xl:px-[59px] rounded-[95px]`}>
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `${
              isActive ? "font-black" : "font-normal"
            } hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-brandBlue`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

const GiveButton = () => (
  <Link
    to="/give"
    className="inline-flex items-center border-[3.155px] border-white h-[53px] rounded-[58.975px] bg-brandBlue px-[42px] font-stemBold text-[18.612px] leading-[0.93] tracking-[0.01em] text-white hover:text-brandBlue hover:bg-lightBlue transition-colors duration-200"
  >
    Give
  </Link>
);


export default function Navbar({ light = false, overlay = false }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className={`w-full ${overlay ? "absolute top-0 inset-x-0" : "relative"} z-50 px-[20px] lg:px-[40px] xl:px-[150px] py-[17px] flex justify-between items-center gap-[10px] lg:gap-[20px] backdrop-blur-[6.5px]`}>
      <Logo light={light} />
      <div className="hidden min-[1120px]:block">
        <NavMenu light={light} />
      </div>
      <div className="hidden min-[1120px]:block">
        <GiveButton />
      </div>

      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="min-[1120px]:hidden flex items-center justify-center size-[54px] rounded-full bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue"
      >
        <img src={menu} alt="" className="h-[22px]" />
      </button>

      {/* Mobile menu: full-screen panel, portalled so the nav's backdrop-filter doesn't contain it */}
      {createPortal(
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        inert={open ? undefined : ""}
        className={`min-[1120px]:hidden fixed inset-0 z-[1000] flex flex-col bg-white text-black transition-[opacity,visibility] duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-between px-[20px] lg:px-[40px] py-[17px]">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="flex items-center justify-center size-[54px] rounded-full bg-pageGrey focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue"
          >
            <img src={closeIcon} alt="" className="h-[22px]" />
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto flex flex-col gap-[6px] px-[20px] lg:px-[40px] pt-[24px]">
          {navItems.map((item, i) => (
            <li
              key={item.path}
              className={`transition-[opacity,translate] duration-500 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
            >
              <NavLink
                to={item.path}
                end={item.path === "/"}
                onClick={close}
                className={({ isActive }) =>
                  `block py-[6px] text-h3 ${isActive ? "text-brandBlue" : "text-black"} hover:text-brandBlue transition-colors`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-[12px] px-[20px] lg:px-[40px] pt-[20px] pb-[32px] border-t border-borderGrey">
          <Link
            to="/give"
            onClick={close}
            className="inline-flex items-center h-[53px] rounded-[58.975px] bg-brandBlue px-[32px] font-stemBold text-[18px] leading-[0.93] tracking-[0.01em] text-white"
          >
            Give
          </Link>
          <Link
            to="/become-a-member"
            onClick={close}
            className="inline-flex items-center h-[53px] rounded-[58.975px] bg-lightBlue px-[28px] font-stemBold text-[18px] leading-[0.93] tracking-[0.01em] text-brandBlue"
          >
            Become a member
          </Link>
        </div>
      </div>,
      document.body
      )}
    </nav>
  );
}

Navbar.propTypes = {
  light: PropTypes.bool,
  overlay: PropTypes.bool,
};

Logo.propTypes = { light: PropTypes.bool };

NavMenu.propTypes = { light: PropTypes.bool };
