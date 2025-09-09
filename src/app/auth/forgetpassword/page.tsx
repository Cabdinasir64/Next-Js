"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const ForgetPasswordPage: React.FC = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
            >
                <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Reset Your Password
                </h1>
                <p className="mb-6 text-center text-gray-600 text-sm">
                    Enter your email address and we’ll send you a link to reset your
                    password.
                </p>
                <form className="space-y-5">
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
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white shadow-md hover:bg-blue-700 transition"
                    >
                        Send Reset Link
                    </motion.button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-600">
                    Remember your password?{" "}
                    <Link href="/auth/login" className="text-blue-600 hover:underline">
                        Login here
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ForgetPasswordPage;
