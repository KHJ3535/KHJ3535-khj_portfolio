"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 60 },
      { name: "AWS", level: 55 },
      { name: "Figma", level: 70 },
    ],
  },
];

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", image: "/skills/React.png" },
        { name: "TypeScript", image: "/skills/TypeScript.png" },
        { name: "Next.js", image: "/skills/Next.js.png" },
        { name: "Tailwind CSS", image: "/skills/Tailwind CSS.png" },
        { name: "HTML5", image: "/skills/HTML5.png" },
        { name: "CSS3", image: "/skills/CSS3.png" },
        { name: "JavaScript", image: "/skills/JavaScript.png" },
      ],
    },
    {
      category: "Backend & DevOps",
      items: [
        { name: "Nest.js", image: "/skills/Nest.js.png" },
        { name: "MySQL", image: "/skills/MySQL.png" },
        { name: "AWS", image: "/skills/AWS.png" },
        { name: "Git", image: "/skills/Git.png" },
        { name: "GitHub", image: "/skills/GitHub.png" },
      ],
    },
    {
      category: "Design",
      items: [
        { name: "Adobe Photoshop", image: "/skills/Adobe Photoshop.png" },
        { name: "Adobe Illustrator", image: "/skills/Adobe Illustrator.png" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-6xl font-bold text-white mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            Skills
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              viewport={{ once: false }}
              className="bg-gray-600/20 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50"
            >
              <motion.h3
                className="text-2xl font-semibold text-white mb-6"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {skillGroup.category}
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className="flex flex-col items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-600/20 transition-all duration-300 cursor-pointer border border-gray-600/30"
                  >
                    <div className="w-12 h-12 relative mb-2">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
