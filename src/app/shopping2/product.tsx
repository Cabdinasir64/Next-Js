"use client";

import { motion } from "framer-motion";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
};

interface ProductsClientProps {
    products: Product[];
}

export default function ProductsClient({ products }: ProductsClientProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <motion.div
                    key={product.id}
                    className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-white cursor-pointer"
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                    <p className="text-gray-600 font-medium">${product.price}</p>
                </motion.div>
            ))}
        </div>
    );
}
