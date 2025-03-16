import new_collection from "../../Assets/new_collections";

function NewCollection() {
  return (
    <ul className="grid grid-rows-2 grid-cols-4 gap-9 mx-16">
      {new_collection.map((item) => (
        <New item={item} key={item.id} />
      ))}
    </ul>
  );
}

function New({ item }) {
  return (
    <li>
      <img
        className="hover:scale-105 pb-2"
        src={item.image}
        alt="new collection"
      />
      <p>{item.name}</p>
      <div className="flex items-center">
        <span className="pr-2">${item.new_price}</span>
        <span className="text-stone-400 line-through">${item.old_price}</span>
      </div>
    </li>
  );
}

export default NewCollection;
