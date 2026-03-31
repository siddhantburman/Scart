import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from '../pages/About';
import Contact from '../pages/Contact'
import Homepage from "../pages/Homepage";
import Search from "../pages/Search";
import MainOutlet from "./MainOutlet";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


let route = createBrowserRouter([

  {
    path: "/",
    element: <MainOutlet />,
    children: [
      { index: true, element: <App /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
      { path: "Login", element: <Login /> },
      { path: "Signup", element: <Signup /> },
    ]
  },
  {
    path: "/s",
    element: <Search />
  },
])

export default route