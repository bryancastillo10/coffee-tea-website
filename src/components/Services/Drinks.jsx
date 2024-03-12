/* eslint-disable no-unused-vars */
import React from "react";

// Object of the menu
import DrinkList from "./DrinkList.js";

const Drinks = () => {
  return (
    <div className="py-10 bg-primary/40">
      <div className="container">
        {/* Header title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursiveTwo text-gray-700">
            Coffee and Tea Bestsellers
          </h1>
        </div>
        {/* Drinks Card Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {DrinkList.map((drink, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={drink.aosDelay}
                  key={index}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
                >
                  {/* Menu Image Section */}
                  <div className="h-[122px]">
                    <img
                      src={drink.img}
                      alt=""
                      className="max-w-[200px] block mx-auto 
                      transform -translate-y-12 group-hover:scale-110 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  {/* Menu Text Content */}
                  <div className="mt-3 p-4 text-center">
                    <h1 className="text-xl font-bold">{drink.name_en}</h1>
                    <h1 className="text-xl font-bold">{drink.name_zh}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {drink.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
