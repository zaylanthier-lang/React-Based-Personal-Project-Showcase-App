import { useState } from "react";
import { useStore } from "../context/StoreContext";

const EditProductForm = ({ product }) => {
  const { updateProduct } = useStore();

  const [formData, setFormData] = useState({
    name: product.name,
    description: product.description,
    origin: product.origin,
    price: product.price
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProduct(product.id, {
      ...formData,
      price: Number(formData.price)
    });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>Edit Product</h3>

      <label>Name</label>
      <input name="name" value={formData.name} onChange={handleChange} />

      <label>Description</label>
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label>Origin</label>
      <input name="origin" value={formData.origin} onChange={handleChange} />

      <label>Price</label>
      <input
        name="price"
        type="number"
        step="0.01"
        value={formData.price}
        onChange={handleChange}
      />

      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProductForm;