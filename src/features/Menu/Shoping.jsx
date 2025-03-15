import NavBar from "../ui/NavBar";
import hand from "../../Assets/hand_icon.png";
import hero from "../../Assets/hero_image.png";
import data_product from "../../Assets/data";
import Item from "./Item";
function Shoping() {
  return (
    <div>
      <NavBar />
      <div className="flex items-center gap-20 justify-self-center">
        <div className="justify-self-center self-center py-10 px-7">
          <p className="capitalize">new arrivals only</p>
          <span className="flex items-center gap-1">
            <h1 className="text-6xl font-bold">new</h1>
            <img className="w-10" src={hand} alt="hand" />
          </span>
          <h1 className="text-6xl font-bold">collections</h1>
          <h1 className="text-6xl font-bold mb-5">for everyone</h1>
          <button className="iniline-block bg-red-400 uppercase tracking-wide font-semibold text-stone-800 rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed focus:bg-yellow-300 py-4 px-3 md:px-5 md:py-2 ">
            latest collection &rarr;
          </button>
        </div>
        <div className="justify-self-center self-center hidden sm:block">
          <img className="w-96" src={hero} alt="hero" />
        </div>
      </div>
      <div>
        <h1
          className="text-center my-10 font-bold text-4xl uppercase Class
Properties
underline underline-offset-8 decoration "
        >
          popular in women
        </h1>
        <ul className="sm:flex gap-6 mx-16">
          {data_product.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Shoping;
