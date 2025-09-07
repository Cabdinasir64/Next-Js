'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  { id: '1', title: 'Blog Post 1' },
  { id: '2', title: 'Blog Post 2' },
  { id: '3', title: 'Blog Post 3' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8"
      >
        Welcome to My Blog
      </motion.h1>
      <motion.p className="p-4 text-lg text-gray-700">
        Discover the latest articles and insights on various topics.
      </motion.p>
      <motion.ul className="space-y-4">
        {blogPosts.map((post) => (
          <motion.li
            key={post.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
