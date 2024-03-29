import { Navbar, MobileAds, Footer } from "src/components";
import { Hero, Drinks, Banner, Ratings } from "src/pages/landing-page";

const LandingPage = () => {
  return (
    <div id="home">
      <Hero />
      <Drinks />
      <Banner />
      <MobileAds />
      <Ratings />
    </div>
  );
};

export default LandingPage;
