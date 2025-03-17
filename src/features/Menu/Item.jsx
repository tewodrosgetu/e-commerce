import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <Link to={`/women/${item.id}`}>
      <img className="hover:scale-105 pb-2" src={item.image} alt="women" />
      <p>{item.name}</p>
      <span className="pr-2">${item.new_price}</span>
      <span className="text-stone-400 line-through">${item.old_price}</span>
    </Link>
  );
}

export default Item;
