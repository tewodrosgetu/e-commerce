import NavBar from "../ui/NavBar";
import hand from "../../Assets/hand_icon.png";
import hero from "../../Assets/hero_image.png";
function Shoping() {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2">
        <div className="justify-center">
          <p>new arrivals only</p>
          <span className="flex items-center gap-1">
            <h1 className="text-6xl font-bold">new</h1>
            <img className="w-10" src={hand} alt="hand" />
          </span>
          <h1 className="text-6xl font-bold">collections</h1>
          <h1 className="text-6xl font-bold">for everyone</h1>
        </div>
        <div>
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Shoping;
