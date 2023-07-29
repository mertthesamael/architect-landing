"use client";
import styles from "./style.module.scss";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Services } from "../constants";
import ServiceCard from "@/components/Cards/ServiceCard";
interface ServicesSliderProps {}

const ServicesSlider: FC<ServicesSliderProps> = ({}) => {
  return (
    <Swiper
      className={styles.servicesSlider}
      modules={[Navigation,Pagination]}
      effect="fade"
      navigation
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {Services.map((el, _i) => (
        <SwiperSlide className={styles.servicesSlider__slide} key={_i}>
          <ServiceCard id={el.id} title={el.title} icon={el.icon} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesSlider;
