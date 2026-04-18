import { createContext, useContext, useState } from "react";
import useProducts from "../hooks/useProducts";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const { products, setProducts, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  const addProduct = async (newProduct) => {
    const response = await fetch("http://localhost:3001/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    });

    const data = await response.json();
    setProducts((prevProducts) => [...prevProducts, data]);
  };

  const updateProduct = async (id, updatedFields) => {
    const response = await fetch(`http://localhost:3001/coffee/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedFields)
    });

    const updatedProduct = await response.json();

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        String(product.id) === String(id) ? updatedProduct : product
      )
    );
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:3001/coffee/${id}`, {
      method: "DELETE"
    });

    setProducts((prevProducts) =>
      prevProducts.filter((product) => String(product.id) !== String(id))
    );
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <StoreContext.Provider
      value={{
        products,
        filteredProducts,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        addProduct,
        updateProduct,
        deleteProduct
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);