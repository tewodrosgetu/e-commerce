import { Link } from "react-router-dom";
import Logo from "./Logo";
import cart_icon from "../../Assets/cart_icon.png";
import Button from "./Button";
import { getTotalQuantity } from "../Menu/CartSlice";
import { useSelector } from "react-redux";

function NavBar() {
  const numberofcart = useSelector(getTotalQuantity);
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
      <div className="flex items-center ">
        <Button type="small" to="/login">
          Login
        </Button>
        <Link to="/cart" className="flex">
          <img src={cart_icon} alt="cart" />
          <div className="w-6 h-5 flex content-center items-center bg-red-500 rounded-xl justify-center">
            {numberofcart}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
