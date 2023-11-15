import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartWidgetContext";
import 'bootstrap/dist/css/bootstrap.css';



export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <nav>
      <Link to={"/"} style={navStyles}>
        <img className="logo p-2" src="/public/images/carrito-azul-logo.png" alt="logo"width="150" height="100" />
      </Link>
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li className="fs-2 p-4">
            Cart items: <span className="cart-count">{quantity}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
