/* eslint-disable no-unused-vars */
import React from "react";
//images
import AppleStore from "../assets/images/app_store.png";
import GooglePlay from "../assets/images/play_store.png";
import BannerTwo from "../assets/bg/coffee-tea-bg.png";

const backgroundBanner = {
  backgroundImage: `url(${BannerTwo})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const MobileAds = () => {
  return (
    <>
      <div style={backgroundBanner} className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div data-aos="fade-up" className="space-y-6 max-w-xl mx-auto">
              {/*Text Content */}
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3 text-white shadow-md">
                For online delivery, Espresso&Tea Co. App is now available for
                Android and IOS
              </h1>
              {/* Logo Content */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="#">
                  <img
                    src={AppleStore}
                    alt="Apple IOS logo"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={GooglePlay}
                    alt="Google Play Store logo"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAds;
