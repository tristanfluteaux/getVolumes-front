import * as actionTypes from "../constants/productConstant";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_REQUEST });

    const { data } = await axios.get("http://localhost:4000/guitars");

    dispatch({
      type: actionTypes.GET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`http://localhost:4000/guitars/${id}`);

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getTypeProducts = (bass) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_TYPE_REQUEST });

    const { data } = await axios.get(`http://localhost:4000/guitars/filter/guitar`);

    dispatch({
      type: actionTypes.GET_TYPE_SUCCESS,
      payload: data, 
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_TYPE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_RESET,
  });
};
