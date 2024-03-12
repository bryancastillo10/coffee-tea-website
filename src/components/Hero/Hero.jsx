/* eslint-disable no-unused-vars */
import React from "react";
import HeroImg from "../../assets/rounded_coffee.png";

const Hero = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Text Content Section */}
          <div className="order-2 sm:order-1">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              Brewing up premium
              <span className="text-primary font-cursiveTwo sm:mr-3">
                coffee and tea
              </span>
              to freshen up your day
            </h1>
            <div>
              <button className="mt-5 bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-10 duration-200">
                Premium Delights
              </button>
            </div>
          </div>
          {/* Image  Content Section */}
          <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img
              src={HeroImg}
              alt="Cup of Coffee"
              className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
            />
            <div className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-1 rounded-xl px-4 py-0.5">
              <h1 className="text-xl">Must Try!</h1>
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-1 rounded-xl px-4 py-0.75">
              <h1 className="text-xl">Premium Grade</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
