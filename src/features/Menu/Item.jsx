function Item({ item }) {
  return (
    <li>
      <img src={item.image} alt="women" />
      <p>{item.name}</p>
      <span className="pr-2">${item.new_price}</span>
      <span className="text-stone-400 line-through">${item.old_price}</span>
    </li>
  );
}

export default Item;
