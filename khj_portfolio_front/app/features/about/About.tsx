"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaBook, FaArrowUp } from "react-icons/fa";

const About = () => {
  const handleEmailCopy = () => {
    navigator.clipboard.writeText("rlagudwns3555@gmail.com");
    alert("이메일이 복사되었습니다!");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] relative overflow-hidden"
    >
      <div className="h-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-20 text-white"
        >
          About Me
        </motion.h2>

        <div className="max-w-6xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 140 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0, ease: "easeIn" }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 ml-48"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Q. 프론트엔드 개발을 선택한 이유는?
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              개발자는 세상의 문제를 기술로 해결하는 사람이라고 생각합니다. 웹
              화면에 내가 작성한 코드가 그대로 구현되는 경험은 저에게 큰 흥미와
              성취감을 주었습니다. 직접 구상한 구조를 코딩하고, 그것이 웹 상에서
              구현되는 과정을 지켜보는 일은 무척 재미있었고, 이 과정을
              반복하면서 개발에 대한 열정이 자연스럽게 커졌습니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -140 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0, ease: "easeIn" }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 mr-48"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Q. 일에 있어서 중요하게 생각하는 것은?
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              저는 소통을 가장 중요하게 생각합니다. 졸업 프로젝트에서 팀장을
              맡아 팀원 간 업무 분배와 협업을 조율하며 커뮤니케이션 능력을 키울
              수 있었고, 실제로 갈등을 중재하고 전체 프로젝트의 방향성을 잡는
              것이 얼마나 어려운 일인지 직접 경험했습니다. 이러한 경험을 통해
              효과적인 소통이 프로젝트의 성공에 얼마나 중요한지 깊이 이해하게
              되었고, 앞으로도 계속해서 소통 능력을 발전시켜 나가고 싶습니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
