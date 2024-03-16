import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../Components/ProjectCard";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "../index.css";
import { projectData } from "./ProjectData";
import SwiperCore, { EffectCube, Pagination } from "swiper";

SwiperCore.use([EffectCube, Pagination]);

export default function ProjectCarousel() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        className="mySwiper"
      >
        {/* {links.map((link) => {
            return (
              <a className="nav-link" href={link.url} key={link.id} onClick={handleClick}>
                {link.text}
              </a>
            )
          })} */}
        {projectData.map((project) => {
          return (
            <SwiperSlide>
              <ProjectCard key={project.title} projectData={project} />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide><Card><Typography>Chat App</Typography></Card></SwiperSlide>
        <SwiperSlide><Card><Typography>Snake</Typography></Card></SwiperSlide>
        <SwiperSlide><Card><Typography>React Expense tracker</Typography></Card></SwiperSlide> */}
      </Swiper>
    </>
  );
}
