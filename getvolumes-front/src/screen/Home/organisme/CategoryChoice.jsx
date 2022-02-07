import accoustichome from "../../../assets/accoustichome.jpg";
import eletrichome from "../../../assets/electrichome.jpg";
import basshome from "../../../assets/basshome.jpg";
import { NavLink } from "react-router-dom";

import "../Home.css";

const CategoryChoice = () => {
  return (
    <>
      <div className="category-container">
        <p>Accoustic</p>
        <img src={accoustichome} alt="accoustic" className="category-img" />
        <NavLink className="nav-category" to="/filter/accoustic">
          <button className="home-category-button">Show Galery</button>
        </NavLink>
      </div>
      <div className="category-container">
        <p>Electric</p>
        <NavLink className="nav-category" to="/filter/guitar">
          <button className="home-category-button">Show Galery</button>
        </NavLink>
        <img src={eletrichome} alt="electric" className="category-img" />
      </div>
      <div className="category-container">
        <p>Bass</p>
        <NavLink className="nav-category" to="/filter/bass">
          <button className="home-category-button">Show Galery</button>
        </NavLink>
        <img src={basshome} alt="bass" className="category-img" />
      </div>
    </>
  );
};

export default CategoryChoice;
