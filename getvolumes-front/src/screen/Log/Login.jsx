import axios from "axios";
import homestud from "../../assets/homestud.jpg";
import { ContextUser } from "../../context/Context";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Login.css";

const Login = () => {
  const { dispatch, accessToken } = useContext(ContextUser);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = { email: email, password: password };
      const response = await axios.post(
        "http://localhost:4000/auth/login",
        body
      );
      if (response.data.access_token) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.access_token,
        });
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-login" style={{ backgroundImage: `url(${homestud})` }}>
      <form className="form-log" onSubmit={(event) => handleSubmit(event)}>
        <h2>Login</h2>
        <label htmlFor="email">Login :</label>
        <input
          type="ident"
          name="email"
          id="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="loginPassword">Password :</label>
        <input
          name="loginPassword"
          type="password"
          id="loginPassword"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
