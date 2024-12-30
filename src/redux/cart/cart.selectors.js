export const selectProductsCount = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
};
export const somaPrecos = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, item) => acc + item.price* item.quantity,
    0
  );
};
