import {Link} from "react-router-dom";

import Button from "src/components/Button.jsx";
import AboutBg from "src/assets/bg/texture-p2.png";
import CoffeeTime from "src/assets/images/about.png";

const AboutBackground = {
    backgroundImage: `url(${AboutBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

const ShopInfo = () => {
  return (
    <div className="w-[90%] mx-auto my-0 px-5 py-2.5" style={AboutBackground}>
    <div className="w-[90%] md:my-0 flex justify-center items-center flex-col text-center mx-auto my-5">
        <h1 className="text-4xl font-cursive relative mb-[25px] after:bg-primary/80">Warm embrance in a cup</h1>
        <p className="text-xl font-italic mb-[35px]">"Coffee and tea are beloved beverage enjoyed by millions worldwide for its bold flavor,
            rich aroma, and comforting warmth"</p>
    </div>
    <div className="w-[90%] mx-auto my-0 px-5 md:py-0 py-2.5">
        <div className="flex flex-col md:flex-row md:p-5 justify-between items-center flex-wrap">
            <div className="max-w-full h-auto block transition-[0.5s] duration-[ease] hover:scale-[1.2]">
                <img className="rounded-full" src={CoffeeTime} alt="coffee" />
            </div>
            <div className="flex-1 ml-5 pl-5 pb-2">
                <h1 className="font-cursive text-2xl text-center pt-10 mb-[15px]">About Espresso&Tea Co.</h1>
                <p className="text-lg leading-normal text-justify mb-2 indent-4">Espresso&Tea Co. is a distinguished establishment, dedicated to providing an 
                exceptional coffee and tea experience. With a commitment to quality and innovation, we strive 
                to exceed the expectations of our patrons. Our expertly crafted beverages, cozy ambiance, 
                and attentive service create a welcoming atmosphere for coffee and tea enthusiasts alike. 
                Come indulge in the artistry of flavor and tradition here at <span className="font-semibold text-tertiary">Espresso&Tea Co.</span></p>
                    <p className="text-lg leading-normal text-justify indent-4">Our store is not just a place to enjoy coffee and tea it's a destination
                    where passion meets perfection. From our carefully selected beans to our meticulously brewed teas, 
                    every aspect of our menu reflects our dedication to excellence.
                   </p>
              <br/><br/><br/>
              <Link to='/order-page'><Button className="flex justify-center">Check the Menu</Button></Link>
            </div>
        </div>
    </div>
   </div>
  )
}

export default ShopInfo
