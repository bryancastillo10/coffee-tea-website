import {ShopInfo, Milestone, Awards } from "src/pages/about-page";
import {MobileAds} from "src/components";
const About = () => {
  return (
<section>
  <ShopInfo/>
  <Milestone iconColor="bg-orange-300"/>
  <MobileAds/>
  <Awards/>
</section>
  );
};

export default About;
