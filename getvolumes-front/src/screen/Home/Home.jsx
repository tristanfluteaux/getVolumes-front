import { NavLink } from "react-router-dom";
import ShopNow from "../../components/Button/ShopNow";
import HomeSlider from "./organisme/HomeSlider";
import CategoryChoice from "./organisme/CategoryChoice";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-main">
      <div className="home-enter-container">
        <p
          className="text-focus-in"
          style={{ fontSize: "50px", paddingTop: "100px" }}
        >
          "We don't sell music. We share it."
        </p>
        <p
          className="text-focus-in"
          style={{
            fontSize: "50px",
            paddingBottom: "80px",
          }}
        >
          Leonard bernstein
        </p>
        <div style={{ paddingBottom: "50px" }}>
          <NavLink style={{ textDecoration: "none" }} to="/product">
            <ShopNow>Shop Now</ShopNow>
          </NavLink>
        </div>
      </div>
      <HomeSlider />
      <div className="home-choice">
        <CategoryChoice />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
