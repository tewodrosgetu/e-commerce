import NavBar from "../ui/NavBar";
import manbaner from "../../Assets/banner_mens.png";
import all_product from "../../Assets/all_product";
import Button from "../ui/Button";
import { useState } from "react";
import Shopper from "../ui/Shopper";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Men() {
  const men = all_product.filter((item) => item.category === "men");
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
            <select>
              <option disabled selected>
                sort by
              </option>
              <option>name</option>
              <option>balance</option>
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
      <Outlet />
    </div>
  );
}

function ManItem({ item, explore }) {
  if (item.id > 20 && explore) return null;
  return (
    <div>
      <Link to={`/men/${item.id}`} item={item}>
        <img className="hover:scale-105 pb-2" src={item.image} alt="item" />
        <p>{item.name}</p>
        <span className="pr-2">${item.new_price}</span>
        <span className="text-stone-400 line-through">${item.old_price}</span>
      </Link>
    </div>
  );
}

export default Men;
