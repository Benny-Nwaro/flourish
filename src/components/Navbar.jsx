import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Logo = () => (
  <Link to="/">
  <div className="flex flex-col items-center px-8 py-3.5 text-xs font-medium text-blue-600 whitespace-nowrap backdrop-blur-[7.5px] bg-white bg-opacity-60 rounded-[121.698px] tracking-[7.43px] max-md:px-5">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c79ea37b6267d9da7938296ec38acd80e471a7987d91a6c99d698f8c57860c36?apiKey=873e47fe7796454e93671642132d9742&" alt="Church Logo" className="aspect-[3.7] fill-blue-600 w-[99px]" />
    <div>CHURCH</div>
  </div>
  </Link>
);

const NavItem = ({ children }) => <div>{children}</div>;

const NavMenu = () => {
  const navItems = ["Home", "Who we are", "Sermons", "About PACE", "Expressions", "Blogs", "Live"];

  return (
    <nav className="flex gap-5 justify-between px-14 py-6 text-base leading-6 text-black backdrop-blur-[10.5px] bg-white bg-opacity-60 rounded-[95px] max-md:flex-wrap max-md:px-5">
      {navItems.map((item, index) => (
        
        <NavItem key={index} ><Link to={"/" + item.replaceAll(' ', '')}>{item}</Link></NavItem>
      ))}
    </nav>
  );
}; 

const GiveButton = () => (
  <Link to="give">
  <button className="justify-center hover:bg-opacity-5 px-11 py-4 text-xl tracking-normal leading-4 text-white whitespace-nowrap bg-blue-600 border-white border-solid border-[3px] rounded-[58.975px] max-md:px-5">
    Give
  </button>
  </Link>
);


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex justify-center items-center px-16 py-4 backdrop-blur-[6.5px] max-md:px-5 bg-slate-200 ">
      <div className="flex gap-5 justify-between w-full max-w-[1140px] max-md:flex-wrap max-md:max-w-full">
        <Logo />
        <NavMenu />
        <GiveButton />
      </div>
    </header>
  )
}
