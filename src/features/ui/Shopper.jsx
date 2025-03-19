import logo from "../../Assets/logo.png";
import insta from "../../Assets/instagram_icon.png";
import whatsup from "../../Assets/whatsapp_icon.png";
import point from "../../Assets/pintester_icon.png";
function Shopper() {
  return (
    <div className="flex flex-col space-x-2 items-center justify-center my-8 ">
      <img src={logo} alt="logo" />
      <h1 className="font-bold text-3xl uppercase ">shopper</h1>
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
  );
}

export default Shopper;
