"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      name: "React",
      image: "/skills/React.png",
      description: "React를 활용한 웹 애플리케이션 개발",
    },
    {
      name: "Next.js",
      image: "/skills/Next.js.png",
      description: "Next.js를 활용한 서버 사이드 렌더링",
    },
    {
      name: "TypeScript",
      image: "/skills/TypeScript.png",
      description: "TypeScript를 활용한 타입 안정성 확보",
    },
    {
      name: "Tailwind CSS",
      image: "/skills/Tailwind CSS.png",
      description: "Tailwind CSS를 활용한 반응형 디자인",
    },
    {
      name: "JavaScript",
      image: "/skills/JavaScript.png",
      description: "JavaScript를 활용한 동적 웹 개발",
    },
    {
      name: "HTML5",
      image: "/skills/HTML5.png",
      description: "HTML5를 활용한 웹 구조 설계",
    },
    {
      name: "CSS3",
      image: "/skills/CSS3.png",
      description: "CSS3를 활용한 스타일링",
    },
    {
      name: "Git",
      image: "/skills/Git.png",
      description: "Git을 활용한 버전 관리",
    },
    {
      name: "GitHub",
      image: "/skills/GitHub.png",
      description: "GitHub를 활용한 프로젝트 관리",
    },
    {
      name: "AWS",
      image: "/skills/AWS.png",
      description: "AWS를 활용한 클라우드 서비스 구축",
    },
    {
      name: "MySQL",
      image: "/skills/MySQL.png",
      description: "MySQL을 활용한 데이터베이스 관리",
    },
    {
      name: "Nest.js",
      image: "/skills/Nest.js.png",
      description: "Nest.js를 활용한 백엔드 개발",
    },
    {
      name: "Adobe Photoshop",
      image: "/skills/Adobe Photoshop.png",
      description: "Adobe Photoshop을 활용한 이미지 편집",
    },
    {
      name: "Adobe Illustrator",
      image: "/skills/Adobe Illustrator.png",
      description: "Adobe Illustrator를 활용한 그래픽 디자인",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-lg text-gray-600">제가 보유한 기술 스택입니다.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <div className="w-16 h-16 relative mb-4">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
