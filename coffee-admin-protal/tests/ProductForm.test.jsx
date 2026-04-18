import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { StoreProvider } from "../context/StoreContext";

test("renders add product form fields", () => {
  render(
    <BrowserRouter>
      <StoreProvider>
        <ProductForm />
      </StoreProvider>
    </BrowserRouter>
  );

  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/origin/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
});