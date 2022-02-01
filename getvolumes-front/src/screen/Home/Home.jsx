import playhome from "../../assets/playhome.jpg";
import homeTwo from "../../assets/home2.jpg";
import homeThree from "../../assets/home3.jpg";
import homeFour from "../../assets/home4.jpg";
import "./Home.css";
import accoustichome from "../../assets/accoustichome.jpg";
import eletrichome from "../../assets/electrichome.jpg";
import basshome from "../../assets/basshome.jpg";
import { NavLink } from "react-router-dom";
import ShopNow from "../../components/Button/ShopNow";

import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

const Home = () => {
  SwiperCore.use([Autoplay, Pagination]);
  return (
    <div className="home-main">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={playhome} alt="playhome" className="playhome-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={homeTwo} alt="playhome" className="playhome-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={homeThree} alt="playhome" className="playhome-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={homeFour} alt="playhome" className="playhome-img" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <p
          style={{ textAlign: "center", fontSize: "50px", paddingTop: "100px" }}
        >
          "We don't sell music. We share it."
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: "50px",
            paddingBottom: "80px",
          }}
        >
          Leonard bernstein
        </p>
      </div>
      <div style={{ paddingBottom: "50px" }}>
        <NavLink style={{ textDecoration: "none" }} to="/product">
          <ShopNow>Shop Now</ShopNow>
        </NavLink>
      </div>
      <div className="home-choice">
        <div
          style={{
            width: "33%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Accoustic</p>
          <img
            src={accoustichome}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <button className="home-category-button">Show Galery</button>
        </div>
        <div
          style={{ width: "33%", display: "flex", justifyContent: "center" }}
        >
          <p>Electric</p>
          <button className="home-category-button">Show Galery</button>
          <img
            src={eletrichome}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div
          style={{ width: "33%", display: "flex", justifyContent: "center" }}
        >
          <p>Bass</p>
          <button className="home-category-button">Show Galery</button>
          <img
            src={basshome}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
