/* eslint-disable no-unused-vars */
import React from "react";
//images
import AppleStore from "../../assets/webpage/app_store.png";
import GooglePlay from "../../assets/webpage/play_store.png";
import BannerTwo from "../../assets/webpage/coffee-tea-bg.png";

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
      <div style={backgroundBanner}>
        <div className="container">
          <div className="grid"></div>
        </div>
      </div>
    </>
  );
};

export default MobileAds;
