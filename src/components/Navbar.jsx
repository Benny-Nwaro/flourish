

import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";

import logo from '../assets/images/logo.svg'
import downArrow from '../assets/images/icon-arrow-down.svg'
import upArrow from '../assets/images/icon-arrow-up.svg'
import todo from '../assets/images/icon-todo.svg'
import calender from '../assets/images/icon-calendar.svg'
import reminder from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'
import menu from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-close-menu.svg'


const Logo = () => (
  <Link to="/">
    <div className="flex flex-col items-center px-8 py-3.5 ml-32 text-xs font-medium text-blue-600 whitespace-nowrap backdrop-blur-[7.5px] bg-white  max-w-[157px] rounded-[121.698px] tracking-[7.43px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b98d996d27d080013d782415ba0af3742371f2b7c09bb564c863d77e8dab626d?apiKey=873e47fe7796454e93671642132d9742&"
        alt="Church icon"
        className="w-full aspect-[3.7] fill-blue-600"
      />
      <div>CHURCH</div>
    </div>
  </Link>
);

const NavItem = ({ children }) => <div>{children}</div>;

const NavMenu = () => {
  const navItems = ["Home", "Who we are", "Sermons", "About PACE", "Expressions", "Blogs", "Live"];

  return (
    
    <nav className="flex gap-5 justify-between bg-white w-full pr-10 pl-10 ml-28  py-6 text-base leading-6 text-black backdrop-blur-[10.5px]  rounded-[95px] max-md:flex-wrap max-md:px-5">
      {navItems.map((item, index) => (
        
        <NavItem key={index} ><Link to={"/" + item.replaceAll(' ', '')}>{item}</Link></NavItem>
      ))}
    </nav>
  );
}; 

const GiveButton = () => (
  <Link to="/give">
  <button className="border-2 border-white h-[50px] w-[100px] mr-36 rounded-full bg-blue-700 text-white hover:text-blue-700 hover:border-gray-800 hover:bg-white">
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
    <div className='max-w-[1440px] sticky top-0 z-50 pt-5 pb-5  mx-auto flex justify-between '>
      <div className='flex items-center ml-4 w-full'>
        <Logo/>
        <ul className='hidden md:flex font-epilogue text-[15px] items-center mx-12 text-gray-600'>
        <NavMenu />
        </ul>
      </div>
      <div className='hidden md:flex transition-all duration-700font-epilogue text-[15px] items-center text-gray-600'>
      <GiveButton />

      </div>
      <div className='flex items-center mr-8'>
                <img src={menu} alt='menuIcon'className={Sidenav ? 'hidden' : 'flex h-[22px] cursor-pointer md:hidden'} onClick={toggleSidenav} />
      </div>
      <div className={Comnav ? 'absolute top-20 ml-[370px] w-[120px] h-[100px] shadow-2xl rounded-xl flex flex-col justify-center bg-white' : 'hidden'}>
                <ul className='flex flex-col text-gray-600 font-epilogue text-[15px] items-center'>
                    <li className='my-1'>History</li>
                    <li className='my-1'>Our Team</li>
                    <li className='my-1'>Blog</li>
                </ul>
      </div>

      <div className={`absolute flex justify-end overflow-hidden z-50 w-[100%] ${Sidenav ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div className={`h-screen  right-0 w-[60%] flex flex-col bg-slate-200 ${Sidenav ? 'translate-x-0' : 'translate-x-full '}  ease-in-out duration-300`}>
                    <div className='flex justify-end mt-[29px] mr-[32px]'>
                        <img src={close} alt='closeIcon' className='h-[25px] cursor-pointer' onClick={toggleSidenav} />
                    </div>
                    <ul className='text-black  font-epilogue text-[18px] flex flex-col ml-[25px] mt-6'>
                        <li className='my-3'><Link to="/home">Home</Link></li>
                        <li className='my-3'> <Link to="/whoweare">Who we are</Link></li>
                        <li className='my-3'><Link to="/sermons">Sermons</Link></li>
                        <li className='my-3'><Link to="/aboutpace">About PACE</Link></li>
                        <li className='my-3'><Link to="/expressions">Expressions</Link></li>
                        <li className='my-3'><Link to="/Blogs">Blogs</Link></li>
                        <li className='my-3'><Link to="/Live">Live</Link></li>
                    </ul>
                    <div className='text-gray-600 font-epilogue flex flex-col justify-center items-center'>
                        
                    <GiveButton />
                    </div>

                </div>
            </div>
  
    </div>
  )
}
