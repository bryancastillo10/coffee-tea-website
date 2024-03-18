/* eslint-disable no-unused-vars */
import React from "react";
import Img1 from "../../assets/images/coffee.png";
import Img2 from "../../assets/images/tea.png";
// Object of the menu
const DrinkList = [
  {
    id: 1,
    img: Img1,
    name_en: "Café Americano",
    name_zh: "美式咖啡",
    description: "Expertly balanced with hot water for pure satisfaction",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img1,
    name_en: "Café Latte",
    name_zh: "拿鐵咖啡",
    description: "A blend of rich espresso and velvety steamed milk",
    aosDelay: "100",
  },
  {
    id: 3,
    img: Img1,
    name_en: "Cappuccino",
    name_zh: "卡布奇諾",
    description: "Crowned with a delicate sprinkle of aromatic cinnamon",
    aosDelay: "100",
  },
  {
    id: 4,
    img: Img2,
    name_en: "Alishan Oolong Tea",
    name_zh: "阿里山烏龍茶",
    description: " Floral aroma cultivated in the mountains of Taiwan",
    aosDelay: "100",
  },
  {
    id: 5,
    img: Img2,
    name_en: "English Peach Tea",
    name_zh: "英式桃花茶",
    description: "Blend of fragrant black tea infused with juicy peach",
    aosDelay: "100",
  },
  {
    id: 6,
    img: Img2,
    name_en: "Japanese Green Tea",
    name_zh: "日式綠茶",
    description:
      "Delight in the vibrant green hue and refreshing aroma with this beverage",
    aosDelay: "100",
  },
];

const Drinks = () => {
  return (
    <div className="py-10 bg-primary/40">
      <div className="container">
        {/* Header title */}
        <div data-aos="fade-up" className="text-center mb-20">
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
