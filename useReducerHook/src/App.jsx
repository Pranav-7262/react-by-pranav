import React, { useEffect, useState, useReducer, use } from "react";

function reducer(cart, action) {
  // reducer function to manage cart state based on action type
  console.log("cart", cart);
  console.log("action", action);

  switch (action.type) {
    case "ADD_ITEM":
      const newItem = `Item ${cart.length + 1}`;
      const updatedCart = [...cart, newItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;

    case "REMOVE_ITEM":
      const newCart = cart.filter((_, i) => i !== action.index);
      localStorage.setItem("cartItems", JSON.stringify(newCart));
      return newCart;

    case "SET_ITEMS":
      return action.items;

    case "CLEAR_ITEM":
      localStorage.removeItem("cartItems");
      return [];
    default:
      return cart;
  }
}

const App = () => {
  const [cart, dispatch] = useReducer(reducer, []); // Initial state is an empty array ,dispatch is used to send action to reducer

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      dispatch({ type: "SET_ITEMS", items: storedCartItems });
    }
  }, []);
  // const Addcardhandler = () => {
  //   const newItem = `Item ${cart.length + 1}`;
  //   const updatedCart = [...cart, newItem];

  //   setCart(updatedCart);
  //   localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  // };

  // function handleRemoveCards(index) {
  //   const newCart = cart.filter((_, i) => i !== index);
  //   setCart(newCart);
  //   localStorage.setItem("cartItems", JSON.stringify(newCart));
  // }

  // useEffect(() => {
  //   const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
  //   if (storedCartItems) {
  //     setCart(storedCartItems);
  //   }
  // }, []);

  // const handleClearCart = () => {
  //   setCart([]);
  //   localStorage.removeItem("cartItems");
  // };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item} &nbsp;
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", index: index })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: "ADD_ITEM" })}>Add Item</button>
      &nbsp;
      <button onClick={() => dispatch({ type: "CLEAR_ITEM" })}>
        Clear Cart
      </button>
      <p>Total Cart Items: {cart.length}</p>
    </div>
  );
};

export default App;
