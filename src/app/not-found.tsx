"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 text-gray-800 p-4">
            <motion.h1
                className="text-8xl md:text-[12rem] font-extrabold text-indigo-600 mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                404
            </motion.h1>
            <motion.p
                className="text-xl md:text-2xl mb-6 text-gray-700"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                Oops! Page not found.
            </motion.p>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <Link
                    href="/"
                    className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition transform hover:scale-105 shadow-lg"
                >
                    Go Home
                </Link>
            </motion.div>
            <motion.div
                className="absolute top-10 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-30 blur-3xl"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            />
        </div>
    );
}
