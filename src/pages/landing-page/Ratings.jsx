/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";

import { RatingList, SliderSetting } from "src/lists/RatingList.js";

const Ratings = () => {
  return (
    <div className="py-3">
      <div className="container">
        {/* Header section */}
        <div data-aos="fade-up" className="text-center mb-3">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Customer Feedbacks
          </h1>
        </div>
        {/* Commentary section */}
        <div data-aos="zoom-in" className="mt-0">
          <Slider {...SliderSetting}>
            {RatingList.map((rating, index) => {
              return (
                <div key={rating.id} className="my-4">
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/20 relative">
                    {/* image */}
                    <div className="mb-4">
                      <img
                        src={rating.img}
                        alt="profile pictures of comments"
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    {/* comments */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="space-y-3">
                        <p className="text-sm text-gray-700 font-serif">
                          {rating.comment}
                        </p>
                        <h1 className="text-xl font-bold text-black/70 font-cursive">
                          {rating.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-9xl text-black/50 font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
