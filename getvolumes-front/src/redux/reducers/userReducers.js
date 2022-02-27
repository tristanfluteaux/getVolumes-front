import * as actionTypes from "../constants/userConstants";

export const getUserReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_REQUEST:
      return {
        loading: true,
        user: [],
      };
    case actionTypes.GET_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.GET_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const putUserInfoReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case actionTypes.PUT_USER_REQUEST:
      return {
        loading: true,
        user: [],
      };
    case actionTypes.PUT_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.PUT_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
