"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Registerpage: React.FC = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg mt-12"
            >
                <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Create an Account
                </h1>
                <form className="space-y-5">
                    <div>
                        <label className="block text-left text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white shadow-md hover:bg-blue-700 transition"
                    >
                        Register
                    </motion.button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="text-blue-600 hover:underline">
                        Login here
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Registerpage;
