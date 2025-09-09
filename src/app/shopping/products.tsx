"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loading from './loading'

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
};

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filtered, setFiltered] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data: Product[] = await res.json();
                setProducts(data);
                setFiltered(data);

                const cats = Array.from(new Set(data.map((p) => p.category)));
                setCategories(["all", ...cats]);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleFilter = (category: string) => {
        setActiveCategory(category);
        if (category === "all") setFiltered(products);
        else setFiltered(products.filter((p) => p.category === category));
    };

    if (isLoading) return <Loading />;

    return (
        <div>
            <div className="flex justify-center gap-3 mb-6 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`px-4 py-2 rounded-full transition-colors ${activeCategory === cat
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
                            }`}
                        onClick={() => handleFilter(cat)}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filtered.map((product) => (
                    <motion.div
                        key={product.id}
                        className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-white cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-600 font-medium">${product.price}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
