/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
//Package
import AOS from "aos";
import "aos/dist/aos.css";

//Components
import { Navbar, MobileAds, Footer } from "./components";
import { Hero, Drinks, Banner, Ratings } from "./pages/landing-page";

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
