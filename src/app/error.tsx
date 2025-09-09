"use client";

import { motion } from "framer-motion";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                className="bg-white shadow-2xl rounded-2xl p-10 max-w-md text-center"
            >
                <motion.div
                    animate={{ rotate: [0, 10, -10, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-6xl mb-6"
                >
                    ⚠️
                </motion.div>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong!</h1>
                <p className="text-gray-600 mb-6">
                    Sorry, an unexpected error occurred. Please try again.
                </p>
                <button
                    onClick={() => reset()}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Retry
                </button>
                <p className="text-xs text-gray-400 mt-4">
                    {error.message}
                </p>
            </motion.div>
        </div>
    );
}
