import React, { useState } from "react";
import {Link} from "react-router-dom";
import Logo from "src/assets/images/company_logo.png";
import { FaCoffee } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import NavTitles from "src/lists/navData.js";
import Button from "src/components/Button.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky shadow-md w-full top-0 left-0 z-50">
      {/* Left Side of Navbar */}
      <div className="md:flex items-center justify-between bg-secondary py-4 md:px-10 px-7">
        <div className="font-bold text-2xl flex items-center font-cursiveTwo text-white">
          <img src={Logo} alt="Company Logo" className="w-14 mr-1 pt-2" />
          Espresso&TeaCo.
        </div>
        {/* Hamburger Menu */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" :"menu-outline"}></ion-icon>
        </div>
        {/* Right Side of Navbar */}
        <div className="flex justify-between items-center gap-">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-secondary md:rounded-full md:z-auto z-50
    top-0 left-0 w-full md:w-auto  md:pl-4 pl-9 md:pr-4  transition-all duration-500 ease-in 
    ${
      open ? "top-[6rem] opacity-95" : "top-[-480px]"
    } md:opacity-90 opacity-100 `}
          >
            {NavTitles.map((menu) => (
              <li
                key={menu.id}
                className="md:ml-8 text-xl md:my-0 my-7 text-white hover:text-tertiary duration-500"
              >
                <Link to={menu.link}>
                  {menu.name}
                </Link>
              </li>
            ))}
            <Link to='/order-page'><Button>
              <FaCoffee className="text-xl cursor-pointer" />
              Order Now
            </Button></Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
