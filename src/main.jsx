import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Oops />,
  },
  {
    path: "about",
    element: <About/>,
    
  },
  {
    path: "sermons",
    element: <Sermons/>,
    
  },
  {
    path: "expressions",
    element: <Expressions/>,
    
  },
  {
    path: "pace",
    element: <Pace/>,
    
  },
  {
    path: "blogs",
    element: <Blogs/>,
    
  },
  {
    path: "give",
    element: <Give/>,
    
  },
  {
    path: "live",
    element: <Live/>,
    
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
