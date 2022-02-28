/* eslint-disable no-fallthrough */
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedItem = state.cart.find((item) => item === action.payload);

      if (!addedItem) {
        return { ...state, cart: [...state.cart, action.payload] };
      }
    case REMOVE_FROM_CART:
      let alreadyIncart = state.cart.find((item) => item === action.payload);

      if (alreadyIncart) {
        let removeProduct = state.cart.filter(
          (item) => action.payload !== item
        );

        return { ...state, cart: removeProduct };
      }
      return state;
    default:
      return state;
  }
};
