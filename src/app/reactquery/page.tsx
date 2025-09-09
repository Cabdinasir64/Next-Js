'use client'

import React, { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import Loading from './loading';

interface User {
  id: number;
  name: string;
  email: string;
}
function Page() {
  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
    initialData: [],
  });

  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading users</div>;
  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center mt-12">Users List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map(user => (
          <motion.div
            key={user.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: user.id * 0.1 }}
          >
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Page