import { useEffect } from "react";
//Package
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";

//Components
import {LandingPage, About, Contact, OrderPage} from "src/pages";
import { Navbar, Footer} from "src/components/";


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
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/order-page" element={<OrderPage/>}/>
        </Routes>
      <Footer/>
    </>
  );
};

export default App;
