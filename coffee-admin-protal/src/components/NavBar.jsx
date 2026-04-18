import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Coffee R Us Admin</h1>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/add-product">Add Product</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;