const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        accessToken: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        accessToken: null,
        error: true,
      };
    case "LOGOUT":
      return {
        accessToken: null,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;
