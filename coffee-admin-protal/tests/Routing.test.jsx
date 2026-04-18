import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { StoreProvider } from "../context/StoreContext";

test("renders home page on default route", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </MemoryRouter>
  );

  expect(screen.getByText(/admin portal/i)).toBeInTheDocument();
});