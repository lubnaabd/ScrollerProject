import React, { useEffect, useState } from "react";
import { Statment, Word, Swipers } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
]);

const ListItem = (props) => {
  return (
    <Swipers>
      <Swiper
        slidesPerView={3}
        mousewheel={true}
        keyboard={true}
        spaceBetween={10}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        direction="vertical"
        className="mySwiper"
        effect="coverflow"
        coverflowEffect={{
          // rotate: 50,
          depth: 200,
          modifier: 1,
          slideShadows: false,
          scale	:1
          // transformEl:{fontsize:10}
        }}
      >
        {props.data.length > 0 &&
          props.data.map((element, index) => (
            <SwiperSlide key={ index}>
              <Statment>
                <Word>{element.word1}</Word>
                <Word>{element.word2}</Word>
                <Word>{element.word3}</Word>
              </Statment>
            </SwiperSlide>
          ))}
      </Swiper>
    </Swipers>
  );
};

export default ListItem;