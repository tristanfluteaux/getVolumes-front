import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextUser } from "../../context/Context";
import SearchBar from "./SearchBar";
import cartListIcon from "../../assets/shopIcon.png"
import "./Header.css";

const Header = () => {
  const { dispatch, access_token } = useContext(ContextUser);

  const out = () => {
    localStorage.removeItem("access_token");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="header-main">
      <SearchBar/>
      <div className="header-div-title">
        <NavLink style={{ textDecoration: "none" }} to="/" className="nav">
          <h1 className="header-title">Get Volumes</h1>
        </NavLink>
      </div>
        {access_token ?<div className="header-log">
          <img src={cartListIcon} alt="icon" style={{height: "30px", paddingRight: "20px"}}/>
          <p style={{cursor: "pointer"}} onClick={out}>Log Out</p></div> :
      <div className="header-log">
        <NavLink
        style={{ textDecoration: "none" }}
        to="/register"
        className="nav"
        >
          <p>Register</p>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="login" className="nav">
          <p>Login</p>
        </NavLink>
      </div>
        }
    </div>
  );
};

export default Header;
