import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// Utilities
import { loginUser, logoutUser } from "../../redux/user/actions";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

//Aqui, o dispatch é armazenado em uma variável para ser usado posteriormente.
  const dispatch = useDispatch(); 

//Permite acessar diretamente partes do estado global.
//Retorna o usuário atualmente logado, permitindo que o componente ajuste sua interface de acordo.
  const { currentUser } = useSelector((state) => state.userReducer);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };
//Ação que envia um payload com os dados do usuário para o store e atualiza o estado no reducer.
  const handleLoginClick = () => {
    dispatch(loginUser({ name: "Felipe Rocha", email: "felipe@rocha.com" }));
  };

//Ação que redefine o usuário como null no estado global.
  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
