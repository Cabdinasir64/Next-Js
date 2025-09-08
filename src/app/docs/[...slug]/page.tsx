"use client";

import React from "react";
import { motion } from "framer-motion";

interface DocsCatchAllProps {
    params: Promise<{ slug: string[] }>;
}

export default function DocsCatchAll({ params }: DocsCatchAllProps) {
    const { slug } = React.use(params);

    const feature = slug[0] || "unknown-feature";
    const example = slug[1] || "example-not-specified";

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg max-w-xl text-center"
            >
                <h1 className="text-3xl font-bold text-indigo-600 mb-4">
                    {feature.replace(/-/g, " ")}
                </h1>
                <p className="text-gray-700 mb-2">You are viewing: {example.replace(/-/g, " ")}</p>
                <p className="mt-4 text-gray-600">
                    This is a nested documentation page. You can click other examples from the main docs page.
                </p>
            </motion.div>
        </section>
    );
}
