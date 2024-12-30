import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; //Componente do Redux que conecta o estado global (store) à aplicação React.
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/store"; //O objeto que armazena o estado global da aplicação e gerencia a lógica do Redux.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
//   O Provider é um componente do Redux que:
// Torna o store disponível para todos os componentes filhos dentro da aplicação.
// Permite que os componentes utilizem o estado global ou despachem ações para modificar esse estado.

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
