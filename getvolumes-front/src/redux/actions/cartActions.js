import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:4000/guitars/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      quantity: data.quantity,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};