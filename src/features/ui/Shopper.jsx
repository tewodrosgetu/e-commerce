import logo from "../../Assets/logo.png";
function Shopper() {
  return (
    <div className="flex space-x-2 items-center">
      <img src={logo} alt="logo" />
      <h1 className="font-bold text-3xl uppercase ">shopper</h1>
    </div>
  );
}

export default Shopper;
