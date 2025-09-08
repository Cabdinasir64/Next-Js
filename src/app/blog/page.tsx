'use client';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl opacity-30"
      />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          Welcome to <span className="text-blue-400">My Blog</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8"
        >
          Discover fresh articles, insights, and stories on technology, coding, and more.
        </motion.p>
      </div>
    </section>
  );
}
