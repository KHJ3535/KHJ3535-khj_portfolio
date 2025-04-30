"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectDetails {
  overview: string;
  features: string[];
  github: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  details: ProjectDetails;
  color?: string;
  image: string;
  imageType: "png" | "svg";
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "AirBnB",
      description:
        "기본적인 HTML/CSS 및 JavaScript를 사용하여 만든 클론 프로젝트",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      link: "https://khj3535.github.io/airbnb/",
      color: "bg-blue-500",
      image: "/project_img/Airbnb-Logo.wine.png",
      imageType: "png",
      details: {
        overview: "AirBnB 웹사이트를 클론하여 만든 프로젝트입니다.",
        features: ["반응형 디자인", "카테고리 별 조회"],
        github: "https://github.com/KHJ3535/airbnb",
      },
    },
    {
      title: "To-do List",
      description: "실시간 데이터 동기화가 가능한 할 일 관리 애플리케이션",
      technologies: ["React"],
      link: "https://khj3535.github.io/ToDoList/",
      color: "bg-green-500",
      image: "/project_img/todolist.png",
      imageType: "png",
      details: {
        overview: "할 일 추가, 삭제 가능한 TO-DO LIST",
        features: ["할 일 추가/삭제 가능", "Weather API 연동"],
        github: "https://github.com/KHJ3535/ToDoList",
      },
    },
    {
      title: "Echannel",
      description: "GSAP를 활용한 인터랙티브한 웹사이트",
      technologies: ["JavaScript", "Gsap"],
      link: "https://khj3535.github.io/echannel/",
      color: "bg-purple-500",
      image: "/project_img/echannel.svg",
      imageType: "svg",
      details: {
        overview: "GSAP 애니메이션을 활용한 인터랙티브한 웹사이트",
        features: [
          "스크롤 기반 애니메이션",
          "인터랙티브한 UI 요소",
          "반응형 디자인",
          "부드러운 전환 효과",
        ],
        github: "https://github.com/KHJ3535/echannel",
      },
    },
    {
      title: "Nonymousa",
      description: "Nest.js, Tailwind CSS를 사용하여 만든 프로젝트",
      technologies: ["Nest.js", "Firebase", "Tailwind CSS"],
      link: "https://nonymousa-96tm.vercel.app/main",
      color: "bg-yellow-500",
      image: "/project_img/nonymousaa.png",
      imageType: "png",
      details: {
        overview: "Nonymousa 웹사이트를 클론하여 만든 프로젝트입니다",
        features: [
          "반응형 디자인",
          "카테고리별 조회",
          "상품 등록, 수정, 삭제",
          "상세페이지",
          "장바구니",
        ],
        github: "https://github.com/jiheon0928/NONYMOUSA",
      },
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="min-h-screen relative overflow-hidden">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center mb-12 text-white"
        >
          My Projects
        </motion.h2>
        <div className="relative">
          <div className="absolute -left-16 top-[50%] -translate-y-[50%] z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="custom-prev !w-10 !h-10 !bg-gray-800/50 !backdrop-blur-sm !rounded-full !shadow-lg hover:!bg-gray-700/50 transition-all duration-300 flex items-center justify-center border border-gray-700/50"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
          </div>
          <div className="absolute -right-16 top-[50%] -translate-y-[50%] z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="custom-next !w-10 !h-10 !bg-gray-800/50 !backdrop-blur-sm !rounded-full !shadow-lg hover:!bg-gray-700/50 transition-all duration-300 flex items-center justify-center border border-gray-700/50"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
            loop={true}
            initialSlide={0}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-8"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gray-700/50 cursor-pointer h-[400px] relative group"
                >
                  <div className="relative h-48 w-full bg-[#1a1a1a]">
                    {project.imageType === "svg" ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-4"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handleProjectClick(project)}
                      className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      자세히 보기
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                {selectedProject.imageType === "svg" ? (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain p-4"
                  />
                ) : (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {selectedProject.description}
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  주요 기능
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {selectedProject.details.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-gray-600 bg-gray-100 px-4 py-2 rounded-lg"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  프로젝트 보기
                </a>
                <a
                  href={selectedProject.details.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
