/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import FooterImg from "../assets/bg/coffee-footer.jpg";

import FootList from "../lists/footerData.js";

const backgroundFooter = {
  backgroundImage: `url(${FooterImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minheight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={backgroundFooter} className="text-white mt-10 py-1">
      <div className="bg-tertiary/20 min-h-[400px] pt-1">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-2xl sm:text-3xl font-semibold tracking-widest font-cursiveTwo"
            >
              Espresso & Tea Co.
            </a>
            <p className="pt-4">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments, Your Perfect
              Espresso Escapade
            </p>
            <a
              href="#"
              className="inline-block bg-[#3D2517] py-2 px-4 mt-5 text-sm rounded-full"
            >
              Web Design by Bryan
            </a>
          </div>
          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* First Column Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Footer Links
              </h1>
              <ul className="space-y-3">
                {FootList.map((list, index) => (
                  <li key={index}>
                    <a
                      href={list.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {list.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second Column Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FootList.map((list, index) => (
                  <li key={index}>
                    <a
                      href={list.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {list.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Address Section */}
            <div className="py-8 px-4 cols-span-2 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Store Location:
              </h1>
              <p>
                {" "}
                G/F Eastwood City Walk 2, 2nd St., Bagumbayan, Quezon City,
                1110, Metro Manila, Philippines
              </p>
              <p>+639 12345678</p>
              {/* Social Media Links */}
              <div className="space-x-3 mt-6">
                <a href="#">
                  <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl inline-block hover:scale-105 duration-200" />
                </a>
                <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200" />
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
