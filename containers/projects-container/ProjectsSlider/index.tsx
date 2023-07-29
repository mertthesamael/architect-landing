"use client"
import styles from './style.module.scss'
import "./swiperConfig.scss"
import React, { FC, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation, Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { arrow } from "@/services/Icons/svgIcons";
import ProjectCard from '@/components/Cards/ProjectCard';
import { Projects } from './constants';

interface ProjectsSliderProps {
  
}

const ProjectsSlider: FC<ProjectsSliderProps> = ({  }) => {
    const swiperRef = useRef<any>(null)
  return (
    <div>
    <Swiper  className={styles.projectsSlider}
    modules={[Navigation, Pagination]}
    effect="fade"
    onSwiper={(swiper) => {
        swiperRef.current = swiper;
    }}
    pagination={{ clickable: true }}>
      <SwiperSlide className={styles.projectsSlider__slide}> 
      {Projects.map((el, _i) =><ProjectCard key={_i} id={el.id} name={el.name} address={el.address} img={el.img} />)}
      </SwiperSlide>
      <SwiperSlide className={styles.projectsSlider__slide}> 
      {Projects.map((el, _i) =><ProjectCard key={_i} id={el.id} name={el.name} address={el.address} img={el.img} />)}
      </SwiperSlide>
        <div className={styles.projectsSlider__controller}>
        <button onClick={() => swiperRef.current.slidePrev()}>
          {arrow()}Back
        </button>
        <button onClick={() => swiperRef.current.slideNext()}>
          {arrow()}Next
        </button>
        </div>
    </Swiper>

    <Swiper  className={styles.projectsSliderMobile}
    modules={[Navigation, Pagination]}
    effect="fade"
    slidesPerView={1}
    navigation
 
    pagination={{ clickable: true }}>
      {Projects.map((el, _i) =>
      <SwiperSlide key={_i} className={styles.projectsSliderMobile__slide}> 
      <ProjectCard id={el.id} name={el.name} address={el.address} img={el.img} />
      </SwiperSlide>
      )}
     

    </Swiper>
    </div>
  )
}

export default ProjectsSlider;