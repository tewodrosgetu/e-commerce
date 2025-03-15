import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center">
        <img src={logo} alt="logo" />
        <h1 className="font-bold text-3xl">SHOPPER</h1>
      </div>
    </Link>
  );
}

export default Logo;
