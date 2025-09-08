"use client";

import { motion } from "framer-motion";

export default function FirstPage() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <div className="text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                >
                    Welcome to <span className="text-blue-400">First Page</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-300 mb-6"
                >
                    This is a simple modern design with a clean layout.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-2xl font-semibold shadow-lg transition-all"
                >
                    Get Started
                </motion.button>
            </div>
        </section>
    );
}
