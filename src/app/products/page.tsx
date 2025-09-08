"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Product {
    id: number;
    name: string;
    price: string;
    desc: string;
}

const products: Product[] = [
    { id: 1, name: "Wireless Headphones", price: "$120", desc: "Noise-cancelling, long battery life." },
    { id: 2, name: "Smart Watch", price: "$250", desc: "Fitness tracking and notifications." },
    { id: 3, name: "Gaming Laptop", price: "$1,500", desc: "High performance with RGB keyboard." },
    { id: 4, name: "Bluetooth Speaker", price: "$80", desc: "Portable with deep bass." },
    { id: 5, name: "4K Monitor", price: "$400", desc: "Crisp visuals for work and play." },
];

const ProductsPage: React.FC = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6">
            <div className="text-center mb-12 mt-12">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold mb-4"
                >
                    Featured <span className="text-blue-400">Products</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-300"
                >
                    Browse our top picks just for you.
                </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                    >
                        <h2 className="text-xl font-semibold text-blue-300 mb-2">{product.name}</h2>
                        <p className="text-gray-300 mb-3">{product.desc}</p>
                        <p className="text-lg font-bold text-white mb-4">{product.price}</p>
                        <div className="flex items-center gap-x-5">
                            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium transition">
                                Buy Now
                            </button>
                            <Link
                                href={`/products/${product.id}`}
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium transition"
                            >
                                Details
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProductsPage;
