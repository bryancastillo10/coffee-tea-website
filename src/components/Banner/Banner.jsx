/* eslint-disable no-unused-vars */
import React from "react";
//images
import TeaTop from "../../assets/webpage/tea-top.png";
import BannerImg from "../../assets/webpage/texture.png";

//icons
import { ImLeaf } from "react-icons/im";
import { FaMugHot } from "react-icons/fa6";
import { MdSevereCold } from "react-icons/md";

const backgroundBanner = {
  backgroundImage: `url(${BannerImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <div style={backgroundBanner}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image Section */}
            <div>
              <img
                src={TeaTop}
                alt=""
                className="max-w-[430px] w-full mx-auto spin drop-shadow-[10px_-10px_12px_rgba(0,0,0,0.75)]"
              />
            </div>
            {/* Text Content Section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold font-cursive">
                Premium Delights
              </h1>
              <p className="text-sm text-gray-700 tracking-wide leading-5">
                Espresso&Tea Co. invites you to savor the perfect harmony of
                rich espresso and delicate teas. Every sip transports you to a
                world of exquisite flavor and tranquility.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-3">
                    <ImLeaf className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-green-100" />
                    <span>Refreshing Aroma!</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <FaMugHot className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span>Blazing Brews</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <MdSevereCold className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-100" />
                    <span>Icy Infusions</span>
                  </div>
                </div>
                <div className=" border-l-4 border-primary/50 pl-6 space-y-3">
                  <h1 className="text-2xl font-semibold font-cursive">
                    To Tea Lovers,
                  </h1>
                  <p className="text-sm text-gray-700 text-right">
                    Sip on our handcrafted teas, brewed with passion and
                    dedication. Taste the difference in every cup, crafted just
                    for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
