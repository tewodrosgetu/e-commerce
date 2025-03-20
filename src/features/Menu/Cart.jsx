import { useSelector } from "react-redux";
import NavBar from "../ui/NavBar";
import { getCart } from "./CartSlice";
import CartItem from "./CartItem";
function Cart() {
  const cart = useSelector(getCart);
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
      </div>
    </div>
  );
}

export default Cart;
