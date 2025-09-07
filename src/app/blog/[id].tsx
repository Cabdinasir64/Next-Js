'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogPageProps {
  params: { id: string };
}

const posts: Record<string, string> = {
  '1': 'This is a post about Next.js Routing System.',
  '2': 'Here we explain how Dynamic Routes work in Next.js.',
  '3': 'We are using TailwindCSS and Framer Motion for design and animations.',
};

export default function BlogPost({ params }: BlogPageProps) {
  const { id } = params;
  const content = posts[id];

  if (!content) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl">
        Post not found ❌
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50 flex flex-col items-center p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-4">📝 Blog Post {id}</h1>
      <p className="text-lg bg-white shadow p-6 rounded-2xl max-w-xl text-gray-700">
        {content}
      </p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        ← Back to Home
      </Link>
    </motion.div>
  );
}
