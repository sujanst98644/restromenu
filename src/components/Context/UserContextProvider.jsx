import React, { useState, useReducer, useEffect } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  //getting the cartdata from localstorage
  const getData = () => {
    let localCart = localStorage.getItem("Cart");
    return localCart ? JSON.parse(localCart) : [];
  };

  const initialState = {
    cart: getData(),
  };

  const [User, setUser] = useState("");
  // state for the modal component
  const [card, setCard] = useState({});

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "Add_To_Cart":
        const itemExists = state.cart.find(
          (item) => item.id === action.payload.id
        );
        if (itemExists) {
          return state;
        } else {
          return {
            ...state,
            cart: [
              ...state.cart,
              {
                ...action.payload,
                qty: action.qty,
              },
            ],
          };
        }

      case "Remove_From_Cart":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };

      case "Increase":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };

      case "Decrease":
        return {
          ...state,
          cart: state.cart
            .map((item) =>
              item.id === action.payload.id && item.qty >= 1
                ? { ...item, qty: item.qty - 1 }
                : item
            )
            .filter((item) => item.qty > 0),
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
  // storing the cart in localstorage
  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <UserContext.Provider
      value={{ User, setUser, card, setCard, state, dispatch }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
