import milestoneElement from "src/lists/milestoneData.js";
import coffeeIcon from "src/assets/icons/cafe.svg";
import teaIcon from "src/assets/icons/tea.svg";

const Milestone = ({iconColor}) => {
  return (
    <main className="m-0 h-full">
      <h1 className="text-3xl text-center font-cursive">Brewing Journey</h1>
      <div className="flex flex-col justify-center items-center pb-8 sm:text-lg">
        {/* Large Screen View */}
        {milestoneElement.map((element)=>{
          return <div key={element.id} className="flex m-4 relative">
            <div className=""></div>
            <div className=""></div>
            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
            <div className="w-1/2 ml-4 text-secondary/90 font-semibold">{element.year}</div>
            <div className=""></div>
            <img src={element.icon === "cafe" ? coffeeIcon: teaIcon} alt="icons" className={`${iconColor} w-10 mr-2 p-2 rounded-lg z-20`}/>
            <div></div>
            </div>

            {/* Cards Section Mobile View */}
            <div className="w-full border border-gray-600 rounded-lg px-8 scroll-py-4 bg-secondary/30">
              <div className="px-14">{element.title}</div>
              <div className="px-14">{element.theme} <span className="sm:hidden text-tertiary font-bold">| {element.year}</span></div>
              <div className="">{element.description}</div>
              <img src={element.icon === "cafe" ? coffeeIcon: teaIcon} alt="icons" 
              className={`absolute top-2 left-10 sm:hidden ${iconColor} h-8 w-10 p-1 rounded-lg z-20`}/>
              <a>{element.buttonText}</a>
            </div>
            </div>
        })}
     </div>
    </main>
  )
}

export default Milestone
