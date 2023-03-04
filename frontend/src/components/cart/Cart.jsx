import React, { useState } from "react";
import "../styles/cart.css";

function Cart() {
  const [counter, setCounter] = useState(1);

  function handleAdd() {
    setCounter(counter + 1);
  }

  function handleSub() {
    setCounter(counter - 1);
  }

  return (
    <div className="cart_container">
      <h1>Your items</h1>
      <div className="cart_card">
        <img
          src="https://images.unsplash.com/photo-1517710765376-c45ee729918f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="card_image"
        />
        <div className="card_details">
          <h2>Manta</h2>
          <h2>50 Rs</h2>
          <div className="counterbox">
            <button onClick={handleSub} className="counterbtn">
              -
            </button>
            <span className="counter">{counter}</span>
            <button onClick={handleAdd} className="counterbtn">
              +
            </button>
          </div>
          <span>
            <button className="checkout">Checkout</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
