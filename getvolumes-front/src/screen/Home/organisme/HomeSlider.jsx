import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import playhome from "../../../assets/playhome.jpg";
import homeTwo from "../../../assets/home2.jpg";
import homeThree from "../../../assets/home3.jpg";
import homeFour from "../../../assets/home4.jpg";

const HomeSlider = () => {
  SwiperCore.use([Autoplay, Pagination]);

  return (
    <>
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
          type: "progressbar",
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
    </>
  );
};

export default HomeSlider;
