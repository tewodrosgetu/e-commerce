import { useParams } from "react-router-dom";

function ChoosenItem() {
  const { id } = useParams(); // Get the id from the URL

  return (
    <div>
      <h1>Chosen Item</h1>
      <p>Item ID: {id}</p>
      {/* Add logic to display the specific item based on id */}
    </div>
  );
}

export default ChoosenItem;
