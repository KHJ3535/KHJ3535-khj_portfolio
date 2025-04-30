"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, children, className = "" }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen w-full py-20 relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
