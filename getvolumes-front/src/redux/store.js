import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductDetailsReducer,
  getProductsReducer,
  getTypeReducer,
} from "./reducers/productReducers";
import { getUserReducer, putUserInfoReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getTypeProducts: getTypeReducer,
  user: getUserReducer,
  modifUser : putUserInfoReducer,
});

const middleware = [thunk];


const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
