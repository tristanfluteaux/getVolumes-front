import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

try {
  // localStorage.setItem("access_token", JSON.stringify(null))
  // localStorage.clear()
} catch (err) {
  // 👇️ This runs
  console.log("Error: ", err.message);
}

const INITALL_STATE = {
  accessToken: JSON.parse(localStorage.getItem("access_token")) || null,
  error: null,
};
export const ContextUser = createContext(INITALL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITALL_STATE);
  console.log(ContextUser)
  useEffect(() => {
    localStorage.setItem("access_token", JSON.stringify(state.accessToken));
  }, [state.accessToken]);

  return (
    <ContextUser.Provider
      value={{
        accessToken: state.accessToken,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ContextUser.Provider>
  );
};
