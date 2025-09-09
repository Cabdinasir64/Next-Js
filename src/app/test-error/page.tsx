"use client";

import { useState } from "react";

export default function TestErrorButton() {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error("Button triggered error!");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        onClick={() => setThrowError(true)}
      >
        Trigger Error
      </button>
    </div>
  );
}
