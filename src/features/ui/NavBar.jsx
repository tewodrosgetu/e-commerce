import { Link } from "react-router-dom";
import Logo from "./Logo";
import cart_icon from "../../Assets/cart_icon.png";

function NavBar() {
  return (
    <div className="flex items-center justify-around bg-stone-400">
      <Logo />
      <div className="hidden sm:block">
        <ul className="flex space-x-7">
          <li className="focus:text-red-600">
            <Link to="/">Shop</Link>
          </li>
          <li className="">
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/kid">Kid</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <button className="iniline-block bg-yellow-400 uppercase tracking-wide font-semibold text-stone-800 rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed focus:bg-yellow-300 py-4 px-3 md:px-5 md:py-2 pr-3">
          login
        </button>
        <img src={cart_icon} alt="cart" />
        <div className="w-6 h-5 flex content-center items-center bg-red-500 rounded-xl justify-center ">
          0
        </div>
      </div>
    </div>
  );
}

export default NavBar;
