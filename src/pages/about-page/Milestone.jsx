import milestoneElement from "src/lists/milestoneData.js";
import coffeeIcon from "src/assets/icons/cafe.svg";
import teaIcon from "src/assets/icons/tea.svg";

import Slider from "react-slick";
import {SliderSetting} from "src/lists/RatingList.js";

const Milestone = ({iconColor}) => {
  return (
    <main className="m-0 h-full">
      <h1 className="text-3xl text-center font-cursive">Brewing Journey</h1>
      <div className="flex flex-col justify-center items-center pb-8 sm:text-lg">
        {/* Large Screen View */}
        {milestoneElement.map((element)=>{
          return <div key={element.id} className="flex m-4 relative">
            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
            <div className="w-1/2 ml-4 text-secondary/90 font-semibold text-2xl">{element.year}</div>
            <div className={`${iconColor} w-2 h-full translate-x-4 translate-y-8 opacity-30 `}></div>
            <img src={element.icon === "cafe" ? coffeeIcon: teaIcon} alt="icons" className={`${iconColor} w-10 h-10 p-2 rounded-lg z-20`}/>
            <div className={`${iconColor} h-2 w-14 translate-y-5 opacity-30`}></div>
            </div>

            {/* Cards Section Mobile View */}
            <div className="w-full border border-white rounded-lg px-8 scroll-py-4 bg-primary/20 text-center z-10 sm:w-96">
              <div className="text-xl font-semibold px-14">{element.title}</div>
              <div className="text-primary/95 mb-6 px-14 text-small sm:mb-2">{element.theme} <span className="sm:hidden text-tertiary font-bold">| {element.year}</span></div>
              <div className="mb-4 text-left text-xs">{element.description}</div>
              <img src={element.icon === "cafe" ? coffeeIcon: teaIcon} alt="icons" 
              className={`absolute top-2 left-10 sm:hidden ${iconColor} h-8 w-10 p-1 rounded-lg z-20`}/>
              <a className={`${iconColor} font-medium px-4 py-2 rounded-md mx-auto my-2  cursor-pointer hover:bg-yellow-300`}>{element.buttonText}</a>
            </div>
            </div>
        })}
         
     </div>
    </main>
  )
}

export default Milestone
