"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  color?: string;
  image: string;
  imageType: "png" | "svg";
}

const projects: Project[] = [
  {
    title: "AirBnB",
    description: "Next.js와 Tailwind CSS를 사용하여 만든 모던한 클론 프로젝트",
    color: "bg-blue-500",
    image: "/project_img/Airbnb-Logo.wine.png",
    imageType: "png",
  },
  {
    title: "To-do List",
    description: "실시간 데이터 동기화가 가능한 할 일 관리 애플리케이션",
    color: "bg-green-500",
    image: "/project_img/todolist.png",
    imageType: "png",
  },
  {
    title: "Echannel",
    description: "GSAP를 활용한 인터랙티브한 웹사이트",
    color: "bg-purple-500",
    image: "/project_img/echannel.svg",
    imageType: "svg",
  },
  {
    title: "Nonymousa",
    description: "익명 소통 플랫폼",
    color: "bg-yellow-500",
    image: "/project_img/nonymousaa.png",
    imageType: "png",
  },
];

const HomeIntro = () => {
  return (
    <section className="min-h-screen w-full flex items-center bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-6xl font-bold text-white leading-tight">
                안녕하세요,
                <br />
                프론트엔드 개발자
                <br />
                <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
                  김형준
                </span>
                입니다.
              </h1>
              <p className="text-2xl text-gray-300 leading-relaxed">
                사용자 경험을 최우선으로 생각하는
                <br />웹 개발자입니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-6"
            >
              <a
                href="#projects"
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-blue-500/20"
              >
                프로젝트 보기
              </a>
              <a
                href="#contact"
                className="px-10 py-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-lg font-semibold border border-gray-700 hover:border-gray-600"
              >
                연락하기
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-3 relative h-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute inset-0"
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="h-full"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-[#1a1a1a]">
                      <div className="relative h-full w-full bg-[#1a1a1a]">
                        {project.imageType === "svg" ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain p-8"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
                        <div className="text-white">
                          <h3 className="text-4xl font-bold mb-4">
                            {project.title}
                          </h3>
                          <p className="text-xl text-gray-200">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
