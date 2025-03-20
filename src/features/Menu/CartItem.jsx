import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { deleteItem } from "../Menu/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleDelete() {
    console.log(item.id);
    dispatch(deleteItem(item.id));
  }

  return (
    <li className="grid grid-cols-7 items-center place-items-center py-3">
      <img className="w-10" src={item.image} alt="imgcart" />
      <h2 className="col-span-2">{item.name}</h2>
      <span>${item.new_price}</span>
      <h2>{item.quantity}</h2>
      <h2>${item.totalprice}</h2>
      <Button type="round" onClick={handleDelete}>
        Delete
      </Button>
    </li>
  );
}

export default CartItem;
