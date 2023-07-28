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

interface ProjectsSliderProps {
  
}

const ProjectsSlider: FC<ProjectsSliderProps> = ({  }) => {
    const swiperRef = useRef<any>(null)
  return (
    <Swiper  className={styles.projectsSlider}
    modules={[Navigation, Pagination]}
    effect="fade"
    onSwiper={(swiper) => {
        swiperRef.current = swiper;
    }}
    pagination={{ clickable: true }}>
        <SwiperSlide className={styles.projectsSlider__slide}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </SwiperSlide>
        <SwiperSlide className={styles.projectsSlider__slide}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
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
  )
}

export default ProjectsSlider;