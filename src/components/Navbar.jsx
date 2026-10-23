import { useState } from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";
import logo from "../assets/figma/logo.svg";
import logoWhite from "../assets/figma/logo-white.svg";
import menu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close-menu.svg";
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

const NavMenu = ({ light }) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Who we are", path: "/Whoweare" },
    { name: "Sermons", path: "/Sermons" },
    { name: "About PACE", path: "/AboutPACE" },
    { name: "Expressions", path: "/Expressions" },
    { name: "Blogs", path: "/Blogs" },
    { name: "Live", path: "/Live" },
  ];

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
  <Link to="/give">
    <button className="border-[3.155px] border-white h-[53px] rounded-[58.975px] bg-brandBlue px-[42px] font-stemBold text-[18.612px] leading-[0.93] tracking-[0.01em] text-white hover:text-brandBlue hover:bg-lightBlue transition-colors duration-200">
      Give
    </button>
  </Link>
);

export default function Navbar({ light = false, overlay = false }) {
  const [Sidenav, SetSideNav] = useState(false);

  const toggleSidenav = () => {
    SetSideNav(!Sidenav);
  };

  return (
    <nav className={`w-full ${overlay ? "absolute top-0 inset-x-0" : "relative"} z-50 px-[20px] lg:px-[40px] xl:px-[150px] py-[17px] flex justify-between items-center gap-[10px] lg:gap-[20px] backdrop-blur-[6.5px]`}>
      <Logo light={light} />
      <div className="hidden min-[1120px]:block">
        <NavMenu light={light} />
      </div>
      <div className="hidden min-[1120px]:block">
        <GiveButton />
      </div>

      <div
        className={`min-[1120px]:hidden z-999 justify-center items-center bg-white rounded-full p-4 ${Sidenav ? "hidden" : "flex"}`}
      >
        <img
          src={menu}
          alt="menuIcon"
          className={Sidenav ? "hidden" : "flex h-[22px]  cursor-pointer"}
          onClick={toggleSidenav}
        />
      </div>

      <div
        className={`absolute right-0 flex justify-end overflow-hidden z-50 w-full h-[550px] ${
          Sidenav ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={` right-0 w-[60%] flex flex-col justify-between bg-slate-200 bg-opacity-80 shadow-md  p-5 rounded-2xl ${
            Sidenav ? "translate-x-0" : "translate-x-full "
          }  ease-in-out duration-500`}
        >
          <div className="flex bg-white rounded-full p-4 w-fit self-end">
            <img
              src={close}
              alt="closeIcon"
              className="h-[25px] cursor-pointer"
              onClick={toggleSidenav}
            />
          </div>
          <ul className="text-black font-kuano  text-[22px] flex flex-col">
            <li className="my-3 hover:text-blue-700 hover:text-xl">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "font-bold" : ""
                  } hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-brandBlue`
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="my-3  hover:text-blue-700 hover:text-xl">
              {" "}
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "font-bold" : ""
                  } hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-brandBlue`
                }
                to="/whoweare"
              >
                Who we are
              </NavLink>
            </li>
            <li className="my-3  hover:text-blue-700 hover:text-xl">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "font-bold" : ""
                  } hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-brandBlue`
                }
                to="/sermons"
              >
                Sermons
              </NavLink>
            </li>
            <li className="my-3  hover:text-blue-700 hover:text-xl">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "font-bold" : ""
                  } hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-brandBlue`
                }
                to="/aboutpace"
              >
                About PACE
              </NavLink>
            </li>
            <li className="my-3  hover:text-blue-700 hover:text-xl">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "font-bold" : ""
                  } hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-brandBlue`
                }
                to="/expressions"
              >
                Expressions
              </NavLink>
            </li>
            <li className="my-3  hover:text-blue-700 hover:text-xl">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "font-bold" : ""
                  } hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-brandBlue`
                }
                to="/Blogs"
              >
                Blogs
              </NavLink>
            </li>
            <li className="my-3  hover:text-blue-700 hover:text-xl">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "font-bold" : ""
                  } hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-brandBlue`
                }
                to="/Live"
              >
                Live
              </NavLink>
            </li>
          </ul>
          <div className="text-gray-600 font-kuano text-lg flex flex-col">
            <GiveButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  light: PropTypes.bool,
  overlay: PropTypes.bool,
};

Logo.propTypes = { light: PropTypes.bool };
NavMenu.propTypes = { light: PropTypes.bool };
