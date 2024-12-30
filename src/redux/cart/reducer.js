import CartActionTypes from "./actionTypes";

const initialState = {
  products: [],
  totalPrice: 0,
};
//importante fazer a logica de aumentar a quantidade dentro do reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_product:
      //verificar se o produto já esta no carrinho
      const productIsAlrealdyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );
      //se ele estiver, aumentar a quantidade em 1
      if (productIsAlrealdyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }
      //se não estiver adiciona-lo
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    //Remover clicando no x
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case CartActionTypes.INCREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case CartActionTypes.DECREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(item.quantity - 1, 1 )}
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
