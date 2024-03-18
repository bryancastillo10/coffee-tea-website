import { Navbar, MobileAds, Footer } from "src/components";
import { Hero, Drinks, Banner, Ratings } from "src/pages/landing-page";

const LandingPage = () => {
  return (
    <div>
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

export default LandingPage;
