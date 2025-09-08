"use client";

import React from "react";
import { motion } from "framer-motion";

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

interface DetailsPageProps {
    params: Promise<{ productid: string }>;
}

export default function DetailsPageProduct({ params }: DetailsPageProps) {
    const realParams = React.use(params);
    const product = products.find(p => p.id.toString() === realParams.productid);

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg max-w-lg text-center"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
                    Product Details
                </h1>
                {product ? (
                    <>
                        <p className="text-lg text-gray-300">
                            Details about product <span className="font-semibold text-white">{product.id} - {product.name}</span>.
                        </p>
                        <p className="mt-4 text-gray-300">{product.desc}</p>
                        <p className="mt-2 text-lg font-bold text-white">{product.price}</p>
                    </>
                ) : (
                    <p className="text-lg text-red-400">Product not found.</p>
                )}
                <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium transition">
                    Buy Now
                </button>
            </motion.div>
        </section>
    );
}
