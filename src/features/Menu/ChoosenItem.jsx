import { useParams } from "react-router-dom";
import all_product from "../../Assets/all_product";
import inside from "../../Assets/breadcrum_arrow.png";
import NavBar from "../ui/NavBar";
import star_icon from "../../Assets/star_icon.png";
import dual_star_icon from "../../Assets/star_dull_icon.png";
import Button from "../ui/Button";
function ChoosenItem() {
  const { id } = useParams();
  const choose = all_product.find((item) => item.id === Number(id));

  return (
    <div>
      <NavBar />
      <div className="sm:px-28 px-10 mt-10">
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
                  undershirt or outer garmen{" "}
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
                  <Button type="primary">ADD TO CART </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>teda</h1>
      </div>
    </div>
  );
}

export default ChoosenItem;
