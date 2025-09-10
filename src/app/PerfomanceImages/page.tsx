"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img4.jpg'

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-16">
            <h1 className="text-4xl font-bold mb-12 text-gray-800 mt-20">Next.js Image Optimization Demo</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="rounded-xl overflow-hidden shadow-lg"
                >
                    <Image
                        src={Img1}
                        alt="Beautiful Landscape"
                        className="object-cover w-full h-full"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="rounded-xl overflow-hidden shadow-lg"
                >
                    <Image
                        src={Img2}
                        alt="City Skyline"
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="rounded-xl overflow-hidden shadow-lg"
                >
                    <Image
                        src={Img3}
                        alt="Ocean View"
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </motion.div>
            </div>
        </div>
    );
}
