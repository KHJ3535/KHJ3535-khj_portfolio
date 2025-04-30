"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] relative overflow-hidden"
    >
      <div className="h-full max-w-4xl mx-auto px-4 py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center mb-16 text-white"
        >
          Contact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-xl transition-all duration-300 border border-gray-700/50"
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Email</h3>
              <p className="text-gray-300 text-lg">rlagudwns3555@gmail.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">GitHub</h3>
              <a
                href="https://github.com/KHJ3535"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
              >
                https://github.com/KHJ3535
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
