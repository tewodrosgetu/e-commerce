import NavBar from "../ui/NavBar";

import all_product from "../../Assets/all_product";
import Button from "../ui/Button";
import { useState } from "react";
import Shopper from "../ui/Shopper";

function ForAllUi({ catagory, baner }) {
  const who = all_product.filter((item) => item.category === ` ${catagory}`);
  const [explore, setExplore] = useState(true);
  function handleexplore(e) {
    e.preventDefault();
    setExplore(!explore);
  }
  return (
    <div>
      <NavBar />
      <div className="sm:px-28 px-10 mt-10">
        <img src={baner} alt="baner" />
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
        <ul className="grid grid-cols-4 gap-9 mx-16 ">
          {who.map((item) => (
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
  if (item.id > 20 && explore) return;
  return (
    <div>
      <li>
        <img className="hover:scale-105 pb-2" src={item.image} alt="women" />
        <p>{item.name}</p>
        <span className="pr-2">${item.new_price}</span>
        <span className="text-stone-400 line-through">${item.old_price}</span>
      </li>
    </div>
  );
}
export default ForAllUi;
