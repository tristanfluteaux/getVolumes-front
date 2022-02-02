import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextUser } from "../../context/Context";
import SearchBar from "./SearchBar";
import cartListIcon from "../../assets/shopIcon.png";
import Counter from "./Counter";

import "./Header.css";

const Header = () => {
  const { dispatch, accessToken } = useContext(ContextUser);

  const out = () => {
    localStorage.removeItem("access_token");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="header-main">
      <SearchBar />
        <NavLink style={{ textDecoration: "none" }} to="/" className="nav">
          <h1 className="header-title">Get Volumes</h1>
        </NavLink>
      {accessToken ? (
        <div className="header-log">
          <NavLink to="/cart">
            <img src={cartListIcon} alt="icon" style={{ height: "30px" }} />
          </NavLink>
          <Counter />
          <p style={{ cursor: "pointer" }} onClick={out}>
            Log Out
          </p>
        </div>
      ) : (
        <div className="header-log">
          <NavLink
            style={{ textDecoration: "none" }}
            to="/register"
            className="nav"
          >
            <p>Inscription</p>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to="login"
            className="nav"
          >
            <p>Connexion</p>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
