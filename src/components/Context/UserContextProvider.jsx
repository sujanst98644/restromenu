import React, { useState, useReducer } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const initialState = {
    cart: [],
  };
  const [User, setUser] = useState("");

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
                qty: 1,
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

  return (
    <UserContext.Provider value={{ User, setUser, card, setCard, state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;

// import React, { useState, useReducer } from "react";
// import UserContext from "./UserContext";

// function UserContextProvider({ children }) {
//   const initialState = {
//     cart: {},
//   };
//   const [User, setUser] = useState("");

//   const cartReducer = (state, action) => {
//     switch (action.type) {
//       case "Add_To_Cart":
//         const item1 = state.filter(
//           (argItem) => action.payload.id === argItem.id
//         );
//         if (item1.length > 0) {
//           return state;
//         } else {
//           return {
//             ...state,
//             cart: {
//               ...state.cart,
//               [action.payload.id]: {
//                 ...action.payload,
//                 qty: 1,
//               },
//             },
//           };
//         }

//       case "Remove_From_Cart":
//         const item2 = state.filter(
//           (argItem) => argItem.id !== action.payload.id
//         );
//         return item2;

//       case "Increase":
//         const item3 = state.map((argItem) => {
//           if (argItem.id === action.payload.id) {
//             return {
//                 ...state,

//                 cart: {
//                   ...state.cart,
//                   [action.payload.id]:
//                      {
//                         ...argItem,
//                         qty: argItem.qty + 1,
//                       }

//                 }
//               };
//             // { ...argItem, qty: argItem.qty + 1 };
//           } else {
//             return argItem;
//           }
//         });
//         return item3;

//       case "Decrease":
//         const item4 = state.map((argItem) => {
//           if (argItem.id === action.payload.id) {
//             return {
//                 ...state,

//                 cart: {
//                   ...state.cart,
//                   [action.payload.id]:
//                      {
//                         ...argItem,
//                         qty: argItem.qty - 1,
//                       }

//                 }
//               };
//             // { ...argItem, qty: argItem.qty - 1 };
//           } else {
//             return argItem;
//           }
//         });
//         return item4;
//       // return {
//       //   ...state,
//       //   cart: {
//       //     ...state.cart,
//       //     [action.payload.id]: item
//       //       ? {
//       //           ...item,
//       //           qty: item.qty + 1,
//       //         }
//       //       : {
//       //           ...action.payload,
//       //           qty: 1,
//       //         },
//       //   },
//       // };
//       // case "Remove_From_Cart":
//       //   let newCart = { ...state.cart };
//       //   delete newCart[action.payload];
//       //   return {
//       //     ...state,
//       //     cart: newCart,
//       //   };
//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(cartReducer, initialState);
//   return (
//     <UserContext.Provider value={{ User, setUser, state, dispatch }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export default UserContextProvider;
