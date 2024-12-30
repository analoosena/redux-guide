import CartActionTypes from "./actionTypes";

export const addProductToCart = (payload) => ({
  type: CartActionTypes.ADD_product,
  payload,
});

export const removeProductFromCart = (payload) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProductToCart = (payload) => ({
  type: CartActionTypes.INCREASE_PRODUCT,
  payload,
})

export const decreaseProductToCart = (payload) => ({
  type: CartActionTypes.DECREASE_PRODUCT,
  payload,
})

