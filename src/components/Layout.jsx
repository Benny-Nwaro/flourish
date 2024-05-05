import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, Outlet } from 'react-router-dom'


export default function Layout({ children }) {
  return (
    <>
    <Navbar/>
    {children}
    <Outlet/>
    <Footer/>
    </>
  )
}
