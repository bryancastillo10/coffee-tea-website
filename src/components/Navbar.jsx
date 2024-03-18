/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppRoutes from "src/routes/AppRoutes.jsx";

import Logo from "src/assets/images/company_logo.png";
import { FaCoffee } from "react-icons/fa";

import NavTitles from "src/lists/navData.js";
import Button from "src/components/Button.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky shadow-md w-full top-0 left-0 z-50">
      {/* Left Side of Navbar */}
      <div className="md:flex items-center justify-between bg-secondary py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-cursiveTwo text-white">
          <img src={Logo} alt="Company Logo" className="w-14 mr-1 pt-2" />
          Espresso&TeaCo.
        </div>
        {/* Hamburger Menu */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu-outline"}></ion-icon>
        </div>
        {/* Right Side of Navbar */}
        <div className="flex justify-between items-center gap-">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-secondary md:rounded-full md:z-auto z-50
    top-0 left-0 w-full md:w-auto  md:pl-4 pl-9 md:pr-4  transition-all duration-500 ease-in 
    ${
      open ? "top-[6rem] opacity-90 z-1000" : "top-[-480px]"
    } md:opacity-90 opacity-100 `}
          >
            {NavTitles.map((menu) => (
              <li
                key={menu.id}
                className="md:ml-8 text-xl md:my-0 my-7 text-white hover:text-gray-400 duration-500"
              >
                <NavLink to={menu.link} activeClassName="active">
                  {menu.name}
                </NavLink>
              </li>
            ))}
            <Button>
              <FaCoffee className="text-xl cursor-pointer" />
              Order Now
            </Button>
          </ul>
          <AppRoutes />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
