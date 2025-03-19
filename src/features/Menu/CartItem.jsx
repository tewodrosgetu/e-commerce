import Button from "../ui/Button";

function CartItem({ item }) {
  return (
    <li className="grid grid-cols-7 items-center place-items-center py-3 ">
      <img className="w-10" src={item.image} alt="imgcart" />
      <h2 className="col-span-2">{item.name}</h2>
      <span>${item.new_price}</span>
      <h2>{item.quantity}</h2>
      <h2>${item.totalprice}</h2>
      <Button type="round">Delete</Button>
    </li>
  );
}

export default CartItem;
