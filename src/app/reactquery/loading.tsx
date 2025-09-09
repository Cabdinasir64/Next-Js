import React from 'react';

export default function Loading() {
  return (
    <div className="p-4 space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-6 bg-gray-300 rounded animate-pulse"></div>
      ))}
    </div>
  );
}
