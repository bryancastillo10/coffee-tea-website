/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
//Package
import AOS from "aos";
import "aos/dist/aos.css";

//Components
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Drinks from "./components/Services/Drinks.jsx";
import Banner from "./components/Banner/Banner.jsx";
import MobileAds from "./components/MobileAds/MobileAds.jsx";
import Ratings from "./components/Ratings/Ratings.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Drinks />
      <Banner />
      <MobileAds />
      <Ratings />
      <Footer />
    </div>
  );
};

export default App;
