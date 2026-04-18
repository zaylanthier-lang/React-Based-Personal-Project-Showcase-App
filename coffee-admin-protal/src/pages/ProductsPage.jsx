import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import { useStore } from "../context/StoreContext";

const ProductsPage = () => {
  const { loading, error } = useStore();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="page">
      <h2>Products</h2>
      <SearchBar />
      <ProductList />
    </section>
  );
};

export default ProductsPage;