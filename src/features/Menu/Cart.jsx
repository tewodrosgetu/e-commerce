import { useSelector } from "react-redux";
import NavBar from "../ui/NavBar";
import { getCart, getTotalPrice } from "./CartSlice";
import CartItem from "./CartItem";
import Button from "../ui/Button";
import Shopper from "../ui/Shopper";
function Cart() {
  const cart = useSelector(getCart);
  const price = useSelector(getTotalPrice);
  return (
    <div>
      <NavBar />
      <div className="sm:px-28 px-10 mt-10">
        <ul className="divide-y divide-stone-300 border-b mt-3">
          <div className="grid grid-cols-7 items-center place-items-center mb-2 ">
            <h1>Products</h1>
            <h1 className="col-span-2">Title</h1>
            <h1>price</h1>
            <h1>Qountity</h1>
            <h1>Total</h1>
            <h1>Remove</h1>
          </div>
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-10 my-20">
          <div>
            <div className="flex flex-col divide-y divide-stone-300 border-b my-3">
              <div className="flex justify-between py-2 ">
                <h1>subtotal</h1>
                <h1>${price}</h1>
              </div>
              <div className="flex justify-between py-2 ">
                <h1>shiping free</h1>
                <h1>free</h1>
              </div>
              <div className="flex justify-between py-2 ">
                <h1>Total</h1>
                <h1>${price}</h1>
              </div>
            </div>
            <Button type="primary">procede to check out</Button>
          </div>
          <div className="space-y-6">
            <p>if you have a promo code, enter here</p>
            <input
              className=" relative border-stone-500 border-2 placeholder:px-1 p-2 w-80 "
              type="text"
              placeholder="Enter code"
            />
            <button className=" absolute bg-black text-white px-6 py-2 text-xl capitalize  ">
              submit
            </button>
          </div>
        </div>
        <Shopper />
      </div>
    </div>
  );
}

export default Cart;
