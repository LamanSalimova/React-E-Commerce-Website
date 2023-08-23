import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const localStorageStore = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(), //cartItems
  itemCount: 0,
  totalAmmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQuantity = item?.quantity + action.payload.quantity;
            let tempTotalPrice = item.price + tempQuantity;

            return {
              ...item,
              quantity: tempQuantity,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });

        state.carts = tempCart;
        localStorageStore(state.carts);
      } else {
        state.carts.push(action.payload);
        localStorageStore(state.carts);
      }
    },

    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      localStorageStore(state.carts);
    },

    clearCart: (state) => {
      state.carts = [];
      localStorageStore(state.carts);
    },

    getCartTotal: (state) => {
      state.totalAmmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += parseFloat(
          (cartItem.price * cartItem.quantity).toFixed(2)
        ));
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
