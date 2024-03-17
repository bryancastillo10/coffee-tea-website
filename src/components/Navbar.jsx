/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../assets/images/company_logo.png";
import { FaCoffee } from "react-icons/fa";

const NavTitles = [
  {
    id: 1,
    name: "Home",
    link: "/#home",
  },
  {
    id: 2,
    name: "Drinks",
    link: "/#drink",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];
const Navbar = () => {
  return (
    <nav className="w-full fixed z-50 top-0 bg-gradient-to-r from-secondary to-secondary/90 shadow-md text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          {/* Logo section */}
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="#"
              className="font-bold  sm:text-3xl flex justify-center items-center gap-2 tracking-wider"
            >
              <img src={Logo} alt="Company Logo" className="w-14" />
              <span className="font-cursive text-lg">Espresso&Tea Co.</span>
            </a>
          </div>
          {/* Links section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden sm:flex items-center gap-4">
              {NavTitles.map((menu, index) => (
                <li key={index}>
                  <a
                    href={menu.link}
                    className="inline-block text-xl px-4 py-4 text-white/70 hover:text-white duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-primary/70 px-5 py-3 rounded-full hover:scale-105 duration-200 hover:bg-tertiary flex items-center gap-3">
              Order
              <FaCoffee className="text-xl cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
