/* eslint-disable no-unused-vars */
import React from "react";
import FootList from "./FootList.js";
import FooterImg from "../../assets/webpage/coffee-footer.jpg";

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
        <div className="container grid md:grid-cols-3 pb-20">
          {/* Company Details */}
          <div className="">
            <a href="#">Espresso & Tea Co.</a>
            <p></p>
          </div>
          {/* Footer Links */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
