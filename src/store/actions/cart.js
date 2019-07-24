import { ADD_TO_CART } from "./types";

// Add product to cart

export const addToCart = product => ({
  type: ADD_TO_CART,
  payload: product
});
