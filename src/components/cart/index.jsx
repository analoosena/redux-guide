import { useSelector } from "react-redux";

// Styles
import * as Styles from "./styles";

import CartItem from "../cart-item/index";
import { somaPrecos } from "../../redux/cart/cart.selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const precoTotal = useSelector(somaPrecos)

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  return (
    <div>
      <Styles.CartContainer isVisible={isVisible}>
        <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
        <Styles.CartContent>
          <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

          {products.map((product) => (
            <CartItem product={product} />
          ))}
      {precoTotal>0 && (<Styles.CartPriceContainer>
        <p>Valor Total</p>
        <p>R${precoTotal}</p>
      </Styles.CartPriceContainer>
    )}
        </Styles.CartContent>
      </Styles.CartContainer>
    </div>
  );
};

export default Cart;
