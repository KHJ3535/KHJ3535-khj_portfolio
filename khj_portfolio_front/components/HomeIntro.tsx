"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HomeIntro = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-900"
    >
      {/* Background with texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60" /> {/* Darker overlay */}
        <img
          src="/background/background.png"
          alt="Background texture"
          className="w-full h-full object-cover"
        />
        {/* Animated background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              I'm Frontend
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block"
            >
              Developer
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
        >
          저는 Front-End 개발자 김현준이라고 합니다.
          <br />
          사용자 경험을 중요시하는 프론트엔드 개발자입니다.
        </motion.p>

        {/* Skill Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Git",
            "GitHub",
            "AWS",
            "MySQL",
            "Nest.js",
            "Adobe Photoshop",
            "Adobe Illustrator",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 relative"
            >
              <Image
                src={`/skills/${skill}.png`}
                alt={skill}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8"
        >
          <a
            href="#about"
            className="inline-block px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            View Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-2 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HomeIntro;
