"use client";
import { motion } from "framer-motion";
import React from "react";

const Page = () => {
  return (
    <motion.div className="bg-pink-400 min-h-screen flex flex-col items-center justify-center"
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-5xl font-bold text-white"
      >
        Welcome to Next.js!
      </motion.h1>
    </motion.div>
  );
};

export default Page;
