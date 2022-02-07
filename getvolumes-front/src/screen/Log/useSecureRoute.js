import { useContext } from "react";
import { Redirect, Route } from "react-router";
import axios from "axios";

import { ContextUser } from "../../context/Context";

export const PrivateRoute = ({ children, ...rest }) => {
  const { dispatch } = useContext(ContextUser);
  const accessToken = localStorage.getItem("access_token");

  // Defini le Bearer JWT dans header pour les requetes de la page.
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  const testAuth = async () => {
    try {
      await axios.get(`local/login/isUserAuth`);
    } catch (error) {
      //   dispatch({ type: "LOGIN_FAILURE" });
      //   localStorage.removeItem("access_token");
    }
  };
  testAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        accessToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
