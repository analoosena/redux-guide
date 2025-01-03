import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decreaseProductToCart,
  increaseProductToCart,
  removeProductFromCart,
} from "../../redux/cart/action";

// Styles
import * as Styles from "./styles";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id));
  };

  const handleIncreaseClick = () => {
    dispatch(increaseProductToCart(product.id));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductToCart(product.id));
  };

  return (
    <div>
      <Styles.CartItemContainer>
        <Styles.CartItemImage imageUrl={product.imageUrl} />

        <Styles.CartItemInfo>
          <p>{product.name}</p>
          <p>R${product.price}</p>

          <Styles.CartItemQuantity>
            <AiOutlineMinus
              size={20}
              onClick={handleDecreaseClick}
              aria-label={`Decrease quantity of ${product.name}`}
            />
            <p>{product.quantity}</p>
            <AiOutlinePlus
              size={20}
              onClick={handleIncreaseClick}
              aria-label={`Increase quantity of ${product.name}`}
            />
          </Styles.CartItemQuantity>
        </Styles.CartItemInfo>

        <Styles.RemoveButton
          onClick={handleRemoveClick}
          aria-label={`Remove ${product.name}`}
        >
          <AiOutlineClose size={25} />
        </Styles.RemoveButton>
      </Styles.CartItemContainer>
      
    </div>
  );
};

export default CartItem;
