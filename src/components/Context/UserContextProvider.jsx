import React, { useState, useReducer } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const initialState = {
    cart: {},
  };
  const [User, setUser] = useState("");

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "Add_To_Cart":
        const item = state.cart[action.payload.id];
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.id]: item
              ? {
                  ...item,
                  qty: item.qty + 1,
                }
              : {
                  ...action.payload,
                  qty: 1,
                },
          },
        };
      case "Remove_From_Cart":
        let newCart = { ...state.cart };
        delete newCart[action.payload];
        return {
          ...state,
          cart: newCart,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <UserContext.Provider value={{ User, setUser, state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
