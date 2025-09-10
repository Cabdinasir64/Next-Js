'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Product {
    id: number;
    title: string;
    image: string;
}

export default function Page2() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch('https://fakestoreapi.com/products');
            const data: Product[] = await res.json();
            setProducts(data);
            setLoading(false);
        }
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-semibold">Loading products...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16">
            <h1 className="text-3xl font-bold mb-12 mt-20">Fakestore API Images</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {products.map((product, idx) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="rounded-xl overflow-hidden shadow-lg bg-white p-4"
                    >
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={400}
                            height={400}
                            className="object-contain w-full h-64 mb-4"
                        />
                        <h2 className="text-lg font-medium">{product.title}</h2>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
