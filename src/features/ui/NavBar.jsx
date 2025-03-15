import { Link } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
  return (
    <div className="space-x-2">
      <Logo />
      <ul>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
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
  );
}

export default NavBar;
