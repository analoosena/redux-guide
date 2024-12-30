import UserActionTypes from "./action-types";

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => { // Reducer recebe um state e uma action
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload };
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state; //Retorna o estado atual sem alterações, caso o action.type não seja reconhecido. Para evitar erros
  }
};

export default userReducer;
