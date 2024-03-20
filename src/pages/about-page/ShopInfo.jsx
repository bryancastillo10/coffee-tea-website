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
        <h1 className="text-4xl font-cursive relative mb-[25px] after:bg-primary/80">About Us</h1>
        <p className="text-xl text-secondary font-semibold mb-[35px]">Coffee and tea were beloved beverage enjoyed by millions worldwide for its bold flavor,
            rich aroma, and comforting warmth</p>
    </div>
    <div className="w-[90%] mx-auto my-0 px-5 md:py-0 py-2.5">
        <div className="flex flex-col md:flex-row md:p-5 justify-between items-center flex-wrap">
            <div className="max-w-full h-auto block transition-[0.5s] duration-[ease] hover:scale-[1.2]">
                <img className="rounded-full" src={CoffeeTime} alt="coffee" />
            </div>
            <div className="flex-1 ml-5 pl-5">
                <h1 className="font-cursive text-2xl text-center pt-10 mb-[15px]">Warm embrance in a cup</h1>
                <p className="text-lg leading-normal text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem,
                    fugit quam explicabo quisquam maxime? Distinctio in explicabo optio, suscipit commodi
                    unde dicta
                    odio, eius ipsum laboriosam magni dolorum consequuntur soluta doloremque illo tempore mollitia fuga
                    earum consectetur
                    tempora placeat ea. Saepe possimus illum ratione, aliquid incidunt aperiam excepturi odit!</p>
                    <p className="text-lg leading-normal text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem,
                    fugit quam explicabo quisquam maxime? Distinctio in explicabo optio, suscipit commodi
                    unde dicta
                    odio, eius ipsum laboriosam magni dolorum consequuntur soluta doloremque illo tempore mollitia fuga
                    earum consectetur
                    tempora placeat ea. Saepe possimus illum ratione, aliquid incidunt aperiam excepturi odit!</p>
              <Button>Check the Menu</Button>
            </div>
        </div>
    </div>
   </div>
  )
}

export default ShopInfo
