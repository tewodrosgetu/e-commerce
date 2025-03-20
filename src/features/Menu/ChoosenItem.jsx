import { useParams } from "react-router-dom";
import all_product from "../../Assets/all_product";
import inside from "../../Assets/breadcrum_arrow.png";
import NavBar from "../ui/NavBar";
import star_icon from "../../Assets/star_icon.png";
import dual_star_icon from "../../Assets/star_dull_icon.png";
import Button from "../ui/Button";
import Shopper from "../ui/Shopper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
function ChoosenItem() {
  const [showdesc, setShowDesc] = useState(true);
  const [showreviw, setShowreview] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const choose = all_product.find((item) => item.id === Number(id));
  function handledesc(e) {
    e.preventDefault();
    setShowDesc(true);
    setShowreview(false);
  }
  function handlereview(e) {
    e.preventDefault();
    setShowDesc(false);
    setShowreview(true);
  }
  function handleaddtocart(e) {
    e.preventDefault();
    const cart = {
      id: choose.id,
      image: choose.image,
      name: choose.name,
      new_price: choose.new_price,
      quantity: 1,
      totalprice: 1 * choose.new_price,
    };
    dispatch(addItem(cart));
  }
  return (
    <div>
      <NavBar />
      <form className="sm:px-28 px-10 mt-10">
        <span className="flex space-x-1 text-sm">
          <h1>Home </h1>
          <img src={inside} alt="choosen_item" />
          <h1>Shop</h1>
          <img src={inside} className="" alt="choosen_item" />
          <h1>{choose.category}</h1>
          <img src={inside} className="" alt="choosen_item" />
          <h1>{choose.name}</h1>
        </span>
        <div className="mt-10">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 ">
              <img src={choose.image} className=" w-[130px] " alt="choosen" />
              <img src={choose.image} className=" w-[130px] " alt="choosen" />
              <img src={choose.image} className=" w-[130px] " alt="choosen" />
              <img src={choose.image} className=" w-[130px] " alt="choosen" />
            </div>
            <div>
              <img src={choose.image} className="w-[586px]" alt="choosen" />
            </div>
            <div className="space-y-1">
              <h1 className="font-bold text-2xl ">{choose.name}</h1>
              <div className="flex">
                <img src={star_icon} alt="stars" />
                <img src={star_icon} alt="stars" />
                <img src={star_icon} alt="stars" />
                <img src={star_icon} alt="stars" />
                <img src={dual_star_icon} alt="stars" />
                <p>(122)</p>
              </div>
              <div className="space-x-2">
                <span className="text-stone-400 line-through ">
                  ${choose.old_price}
                </span>
                <span className="font-bold">${choose.new_price}</span>
              </div>
              <div>
                <p>
                  A lightweight ,usually knitted ,pillover shirt,close-fitting
                  and withe a round neckline and short sleeves, worn as an
                  undershirt or outer garmen.
                </p>
              </div>
              <div>
                <h1 className="font-bold text-xl mb-2">select size</h1>
                <div className="space-x-3">
                  <Button type="small">S</Button>
                  <Button type="small">M</Button>
                  <Button type="small">L</Button>
                  <Button type="small">XL</Button>
                  <Button type="small">XXL</Button>
                </div>
                <div className="mt-8">
                  <Button onClick={handleaddtocart} type="primary">
                    ADD TO CART
                  </Button>
                </div>
                <div className="mt-8">
                  <p>
                    <span className="font-bold">Catagory: </span>
                    {choose.category},T-shirt,Crop Top
                  </p>
                  <p>
                    <span className="font-bold">Tags: </span>Modern,Lates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-10 ">
          <div className=" flex gap-2  mb-5">
            <Button type="secondary" onClick={handledesc}>
              Description
            </Button>
            <Button type="secondary" onClick={handlereview}>
              Reviews(122)
            </Button>
          </div>
          <div className=" border border-black p-4 ">
            {showdesc && (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas alias aut quaerat praesentium ipsum ducimus quidem
                obcaecati nam dolorum! Quaerat eveniet aut tempore inventore
                reiciendis dignissimos blanditiis atque provident
                exercitationem?
              </p>
            )}
            {showreviw && (
              <p>
                Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Error
                alias, aut ipsam aliquam quibusdam tempora commodi
                exercitationem magnam optio adipisci sit vitae fugit tempore
                consequatur illo quam sequi, iusto dolor.
              </p>
            )}
          </div>
        </div>
        <Shopper />
      </form>
    </div>
  );
}

export default ChoosenItem;
