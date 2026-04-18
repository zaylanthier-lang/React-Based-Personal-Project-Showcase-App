import { useStore } from "../context/StoreContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { filteredProducts } = useStore();

  if (filteredProducts.length === 0) {
    return <p>No matching products found.</p>;
  }

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;