import NavBar from "../ui/NavBar";
import hand from "../../Assets/hand_icon.png";
import hero from "../../Assets/hero_image.png";
import exlusive from "../../Assets/exclusive_image.png";
import insta from "../../Assets/instagram_icon.png";
import whatsup from "../../Assets/whatsapp_icon.png";
import point from "../../Assets/pintester_icon.png";
import data_product from "../../Assets/data";
import Item from "./Item";
import NewCollection from "./NewCollection";
import Button from "../ui/Button";
import Shopper from "../ui/Shopper";

function Shoping() {
  function handlesubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <NavBar />
      <div className="flex items-center gap-20 justify-self-center">
        <div className="justify-self-center self-center py-10 px-7">
          <p className="uppercase">new arrivals only</p>
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
        <ul className="sm:flex gap-6 mx-16 justify-self-center">
          {data_product.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
      <div className="flex items-center mx-32 gap-40 bg-rose-300 mt-32 place-content-center">
        <div className="space-y-3">
          <h1 className="text-6xl font-bold">exclusive</h1>
          <h1 className="text-6xl font-bold">offers for you</h1>
          <p className="uppercase">only on Best sellers products</p>
          <button className="iniline-block bg-red-400 uppercase tracking-wide font-semibold text-stone-800 rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed focus:bg-yellow-300 py-4 px-3 md:px-5 md:py-2 ">
            check now &rarr;
          </button>
        </div>
        <div>
          <img className="w-60" src={exlusive} alt="exclusive offer" />
        </div>
      </div>
      <div>
        <h1 className="uppercase font-bold text-center my-10 underline underline-offset-8 text-4xl">
          New collection
        </h1>
        <NewCollection />
      </div>
      <div className="bg-rose-200 self-center place-items-center mt-10 py-16 mb-6 sm:w-[650px] mx-auto relative ">
        <h1 className="font-bold capitalize text-4xl mb-4 ">
          get exclusive offerson your email
        </h1>
        <p className="mb-3">Subscribe to our newsletter and stay updated</p>
        <form>
          <input
            className="w-64 rounded-full border border-stone-200 px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-yellow-400 transition-all duration-300  md:px-6 md:py-2;"
            type="email"
            placeholder="your email id"
          />
          <Button type="small" onClick={handlesubmit}>
            Subscribes
          </Button>
        </form>

        <div className="mt-16">
          <Shopper />
        </div>
        <ul className="flex space-x-2 mt-6">
          <li>compony</li>
          <li>product</li>
          <li>officer</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        <ul className="flex space-x-2 mt-4">
          <li>
            <img src={insta} alt="insta" />
          </li>
          <li>
            <img src={point} alt="point" />
          </li>
          <li>
            <img src={whatsup} alt="whatsup" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Shoping;
