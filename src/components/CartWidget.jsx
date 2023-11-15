import React, { useContext } from "react";
import { CartContext } from "../contexts/CartWidgetContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div className="cart-container">
      <div>
        <div className="item-cart-button">Items in cart: {quantity}</div>
        <div className="total-price-button">Total: ${totalPrice}</div>
        <button className="checkout-button"  onClick={() => console.log(cart)}>Checkout</button>
      </div>
    </div>
  );
};