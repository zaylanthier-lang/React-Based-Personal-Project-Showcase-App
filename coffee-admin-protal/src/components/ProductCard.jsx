import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useStore();

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Origin:</strong> {product.origin}</p>
      <p><strong>Price:</strong> ${Number(product.price).toFixed(2)}</p>

      <Link to={`/products/${product.id}`} className="button-link">
        View Product
      </Link>

      <button onClick={() => deleteProduct(product.id)}>
        Delete
      </button>
    </div>
  );
};

export default ProductCard;