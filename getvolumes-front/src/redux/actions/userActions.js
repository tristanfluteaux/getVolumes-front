import * as actionTypes from "../constants/userConstants";
import axios from "axios";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_USER_REQUEST });

    const { data } = await axios.get(`http://localhost:4000/auth/1`);

    dispatch({
      type: actionTypes.GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
