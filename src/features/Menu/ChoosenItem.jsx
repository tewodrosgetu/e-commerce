import { useParams } from "react-router-dom";
import all_product from "../../Assets/all_product";

function ChoosenItem({ item }) {
  const { id } = useParams();

  const choose = all_product.find((item) => item.id === Number(id));

  return (
    <div>
      <h1>Choosen id:{choose.id}</h1>
      <img src={choose.image} alt="choosen_image" />
    </div>
  );
}

export default ChoosenItem;
