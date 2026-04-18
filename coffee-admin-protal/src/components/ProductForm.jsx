import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";

const ProductForm = () => {
  const { addProduct } = useStore();
  const navigate = useNavigate();

  const nameId = useId();
  const descriptionId = useId();
  const originId = useId();
  const priceId = useId();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    origin: "",
    price: ""
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      ...formData,
      price: Number(formData.price)
    };

    await addProduct(newProduct);

    setFormData({
      name: "",
      description: "",
      origin: "",
      price: ""
    });

    navigate("/products");
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        id={nameId}
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor={descriptionId}>Description</label>
      <input
        id={descriptionId}
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label htmlFor={originId}>Origin</label>
      <input
        id={originId}
        name="origin"
        value={formData.origin}
        onChange={handleChange}
        required
      />

      <label htmlFor={priceId}>Price</label>
      <input
        id={priceId}
        name="price"
        type="number"
        step="0.01"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;