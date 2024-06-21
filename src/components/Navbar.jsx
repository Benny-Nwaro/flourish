import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";

import FGClogo from '../assets/images/FGClogo.png'
import menu from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-close-menu.svg'


const Logo = () => (
  <Link to="/">
    <div className="flex flex-col items-center bg-white px-8 py-3.5 ml-32 text-xs font-medium text-blue-600 whitespace-nowrap backdrop-blur-[7.5px] max-w-[157px] rounded-[121.698px] max-md:ml-2  tracking-[7.43px]">
      <img
        loading="lazy"
        src={FGClogo}
        alt="Church icon"
        className="w-full aspect-[3.7] fill-blue-600"
      />
      
    </div>
  </Link>
);

const NavItem = ({ children }) => <div className='hover:text-lg hover:text-blue-700 active:text-blue-700'>{children}</div>;

const NavMenu = () => {
  const navItems = ["Home", "Who we are", "Sermons", "About PACE", "Expressions", "Blogs", "Live"];

  return (
    
    <nav className="flex gap-5 justify-between bg-white w-full px-8 py-3.5 text-base leading-6 text-black backdrop-blur-[10.5px]  rounded-[95px] max-md:flex-wrap max-md:px-5">
      {navItems.map((item, index) => (
        
        <NavItem key={index} ><Link to={"/" + item.replaceAll(' ', '')}>{item}</Link></NavItem>
      ))}
    </nav>
  );
}; 

const GiveButton = () => (
  <Link to="/give">
  <button className="border-2 border-white h-[50px] w-[100px] ml-40 rounded-full bg-blue-700 text-white hover:text-blue-700 hover:border-gray-800 hover:bg-white ">
    Give
  </button>
  </Link>
);


export default function Navbar() {
  const [Comnav, SetComNav] = useState(false);
    const [Sidenav, SetSideNav] = useState(false);
    const [sideFae, SetSideFae] = useState(false);
    const [sideCom, SetSideCom] = useState(false);


    function toggleComNav() {
        SetComNav(!Comnav);
    }

    const toggleSidenav = () => {
        SetSideNav(!Sidenav);
    }

    const toggleSideFae = () => {
        SetSideFae(!sideFae);
    }

    const toggleSideCom = () => {
        SetSideCom(!sideCom);
    }
  return (
    <div className='w-full sticky top-0 z-50 pt-5 pb-5   flex justify-between '>
      <div className='flex items-center  w-full'>
        <Logo/>
        <ul className='hidden md:flex font-epilogue text-[15px] items-center w-full  px-32 text-gray-600'>
        <NavMenu />
        <GiveButton />
        </ul>
      </div>
    
      <div className='flex items-center mr-8'>
                <img src={menu} alt='menuIcon'className={Sidenav ? 'hidden' : 'flex h-[22px] cursor-pointer md:hidden'} onClick={toggleSidenav} />
      </div>
    
      <div className={`absolute flex justify-end overflow-hidden z-50 w-[100%] ${Sidenav ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div className={`h-screen  right-0 w-[60%] flex flex-col bg-slate-200 ${Sidenav ? 'translate-x-0' : 'translate-x-full '}  ease-in-out duration-300`}>
                    <div className='flex justify-end mt-[29px] mr-[32px]'>
                        <img src={close} alt='closeIcon' className='h-[25px] cursor-pointer' onClick={toggleSidenav} />
                    </div>
                    <ul className='text-black  font-epilogue text-[18px] flex flex-col ml-[25px] mt-6'>
                        <li className='my-3 hover:text-blue-700 hover:text-xl'><Link to="/home">Home</Link></li>
                        <li className='my-3  hover:text-blue-700 hover:text-xl'> <Link to="/whoweare">Who we are</Link></li>
                        <li className='my-3  hover:text-blue-700 hover:text-xl'><Link to="/sermons">Sermons</Link></li>
                        <li className='my-3  hover:text-blue-700 hover:text-xl'><Link to="/aboutpace">About PACE</Link></li>
                        <li className='my-3  hover:text-blue-700 hover:text-xl'><Link to="/expressions">Expressions</Link></li>
                        <li className='my-3  hover:text-blue-700 hover:text-xl'><Link to="/Blogs">Blogs</Link></li>
                        <li className='my-3  hover:text-blue-700 hover:text-xl'><Link to="/Live">Live</Link></li>
                    </ul>
                    <div className='text-gray-600 font-epilogue flex flex-col justify-center items-center'>
                        
                    <GiveButton />
                    </div>

                </div>
            </div>
  
    </div>
  )
}
