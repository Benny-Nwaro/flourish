import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  // eslint-disable-next-line no-unused-vars
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";


import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Oops from './pages/ErrorPage.jsx';
import Blogs from './pages/Blogs.jsx';
import Expressions from './pages/Expressions.jsx';
import Give from './pages/Give.jsx';
import Pace from './pages/Pace.jsx';
import Sermons from './pages/Sermons.jsx';
import Live from './pages/Live.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(

    <>
        <Route  path="/" element={<Home/>} />
        <Route  path="home" element={<Home/>} />
        <Route path="sermons" element={<Sermons />} />
        <Route path="whoweare" element={<About />} />
        <Route path="expressions" element={<Expressions/>} />
        <Route path="aboutpace" element={<Pace/>} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="give" element={<Give/>} />
        <Route path="live" element={<Live/>} />
        <Route path="*" element={<Oops/>} />
      </>
  )
  );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
