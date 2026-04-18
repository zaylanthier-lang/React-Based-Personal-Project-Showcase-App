import { useParams } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import EditProductForm from "../components/EditProductForm";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { products } = useStore();

  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <section className="page">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Origin:</strong> {product.origin}</p>
      <p><strong>Price:</strong> ${Number(product.price).toFixed(2)}</p>
      <EditProductForm product={product} />
    </section>
  );
};

export default ProductDetailPage;