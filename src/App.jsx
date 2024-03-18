import { useEffect } from "react";
//Package
import AOS from "aos";
import "aos/dist/aos.css";

//Components
import LandingPage from "src/pages/LandingPage.jsx";

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
      <LandingPage />
    </div>
  );
};

export default App;
