"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] relative overflow-hidden"
    >
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center mb-12 text-white"
        >
          Contact
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -140 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
          >
            <div className="flex items-center space-x-4 mb-4">
              <FaEnvelope className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">Email</h3>
            </div>
            <p className="text-gray-300 text-lg ml-12">
              rlagudwns3555@gmail.com
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 140 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
          >
            <div className="flex items-center space-x-4 mb-4">
              <FaGithub className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">GitHub</h3>
            </div>
            <a
              href="https://github.com/KHJ3535"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-lg ml-12 hover:text-blue-400 transition-colors"
            >
              https://github.com/KHJ3535
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
