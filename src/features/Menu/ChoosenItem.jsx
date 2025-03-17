// filepath: c:\Users\hp\Desktop\e-commerce\src\features\Menu\ChoosenItem.jsx
import { useParams } from "react-router-dom";

function ChoosenItem() {
  const { id } = useParams();
  // Fetch or use the item data based on the id
  return (
    <div>
      <h2>Item Details for ID: {id}</h2>
      {/* Render item details here */}
    </div>
  );
}

export default ChoosenItem;
