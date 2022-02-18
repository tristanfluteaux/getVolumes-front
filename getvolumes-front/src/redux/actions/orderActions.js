import * as actionTypes from "../constants/orderConstants";
import axios from "axios";

export const addToOrder = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:4000/guitars/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_ORDER,
    payload: {
      product: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      quantity: data.quantity,
      brend: data.brend,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
