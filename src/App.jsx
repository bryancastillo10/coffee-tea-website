/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
//Package
import AOS from "aos";
import "aos/dist/aos.css";

//Components
import Navbar from "./components/Navbar/Navbar.jsx";

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
      {/* <Home/>
      <About/>
      <Menu/>
      <Contact/> */}
    </div>
  );
};

export default App;
