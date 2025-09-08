"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Feature {
    id: string;
    title: string;
    examples: string[];
}

const features: Feature[] = [
    { id: "feature1", title: "Feature 1: Reusable Components", examples: ["example1", "example2", "example3", "example4", "example5"] },
    { id: "feature2", title: "Feature 2: State Management", examples: ["example1", "example2", "example3", "example4", "example5"] },
    { id: "feature3", title: "Feature 3: Props & Typing", examples: ["example1", "example2", "example3", "example4", "example5"] },
];

export default function DocsPage() {
    return (
        <section className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto mt-12">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-gray-800 mb-12 text-center"
                >
                    Documentation
                </motion.h1>

                <div className="space-y-6">
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <h2 className="text-xl font-semibold text-indigo-600 mb-3">{feature.title}</h2>
                            <div className="flex flex-wrap gap-3">
                                {feature.examples.map((ex) => (
                                    <Link
                                        key={ex}
                                        href={`/docs/${feature.id}/${ex}`}
                                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-md hover:bg-indigo-200 transition"
                                    >
                                        {ex}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
