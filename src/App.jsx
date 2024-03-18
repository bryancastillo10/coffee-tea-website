import { useEffect } from "react";
//Package
import AOS from "aos";
import "aos/dist/aos.css";

//Components
import LandingPage from "src/pages/LandingPage.jsx";
import { Navbar, Footer} from "src/components/";

import AppRoutes from "src/routes/AppRoutes.jsx";

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
    <div>
      <Navbar/>
      <LandingPage/>
      <AppRoutes/>
      <Footer/>
    </div>
  );
};

export default App;
