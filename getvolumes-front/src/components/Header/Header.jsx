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
      <NavLink className="nav" to="/">
        <h1 className="header-title">Get Volumes</h1>
      </NavLink>
      {accessToken ? (
        <div className="header-log">
          <NavLink to="/cart">
            <img
              className="header-shop"
              src={cartListIcon}
              alt="icon"
              style={{ height: "30px" }}
            />
          </NavLink>
          <Counter />
          <NavLink to="/info" className="nav">
            <p>User</p>
          </NavLink>
          <p className="header-shop" onClick={out}>
            Log Out
          </p>
        </div>
      ) : (
        <div className="header-log">
          <NavLink to="/register" className="nav">
            <p className="header-shop">Inscription</p>
          </NavLink>
          <NavLink to="login" className="nav">
            <p className="header-shop">Connexion</p>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
