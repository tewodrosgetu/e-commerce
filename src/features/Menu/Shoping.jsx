import NavBar from "../ui/NavBar";
import { useState } from "react";
import manbaner from "../../Assets/banner_kids.png";
import all_product from "../../Assets/all_product";
import Button from "../ui/Button";
import Shopper from "../ui/Shopper";
import { Link } from "react-router-dom";

function Kid() {
  const men = all_product.filter((item) => item.category === "kid");
  const [explore, setExplore] = useState(true);

  function handleexplore(e) {
    e.preventDefault();
    setExplore(!explore);
  }

  return (
    <div>
      <NavBar />
      <div className="sm:px-28 px-10 mt-10">
        <img src={manbaner} alt="manbaner" />
        <div className="flex justify-between my-3">
          <div>
            <span className="pr-1 font-bold">showing 1-12</span>
            <span>out of 54 product</span>
          </div>
          <div>
            <select defaultValue="">
              <option value="" disabled selected>
                sort by
              </option>
              <option value="name">name</option>
              <option value="balance">balance</option>
            </select>
          </div>
        </div>
        <ul className="grid grid-cols-4 gap-9 mx-16">
          {men.map((item) => (
            <ManItem item={item} key={item.id} explore={explore} />
          ))}
        </ul>
        <div className="my-10 justify-center flex">
          <Button type="primary" onClick={handleexplore}>
            {explore ? "explore more" : "show less"}
          </Button>
        </div>
      </div>
      <div className="flex justify-center my-9">
        <Shopper />
      </div>
    </div>
  );
}

function ManItem({ item, explore }) {
  if (item.id > 32 && explore) return null;
  return (
    <Link to={`/kid/${item.id}`}>
      <li>
        <img className="hover:scale-105 pb-2" src={item.image} alt="women" />
        <p>{item.name}</p>
        <span className="pr-2">${item.new_price}</span>
        <span className="text-stone-400 line-through">${item.old_price}</span>
      </li>
    </Link>
  );
}

export default Kid;
