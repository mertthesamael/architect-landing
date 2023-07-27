"use client";
import styles from "./style.module.scss";
import React, { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { arrow } from "@/services/Icons/svgIcons";
import { Projects } from "./constants";

interface HeroSliderProps {}

const HeroSlider: FC<HeroSliderProps> = ({}) => {
  const swiperRef = useRef<any>(null);
  return (
    <Swiper
      className={styles.heroSlider}
      modules={[Navigation]}
      effect="fade"
      pagination={{ clickable: true }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
        {Projects.map((el) => 
        <SwiperSlide className={styles.heroSlider__slide}>
            <h1>{el.title}</h1>
            <p>{el.content}</p>
        </SwiperSlide>
        )}
      <div className={styles.heroSlider__controller}>
        <button onClick={() => swiperRef.current.slidePrev()}>
          {arrow()}Back
        </button>
        <button onClick={() => swiperRef.current.slideNext()}>
          {arrow()}Next
        </button>
      </div>
    </Swiper>
  );
};

export default HeroSlider;
