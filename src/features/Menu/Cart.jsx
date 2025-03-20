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
        <div className="grid grid-cols-7">
          <h1>Products</h1>
          <h1>Title</h1>
          <h1>Price</h1>
          <h1>Quantity</h1>
          <h1>Total</h1>
          <h1>Remove</h1>
        </div>
        <ul>
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
