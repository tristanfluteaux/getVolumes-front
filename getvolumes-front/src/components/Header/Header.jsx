import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-main">
      <SearchBar />
      <div className="header-div-title">
        <NavLink style={{ textDecoration: "none" }} to="/" className="nav">
          <h1 className="header-title">Get Volumes</h1>
        </NavLink>
      </div>
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
    </div>
  );
};

export default Header;
