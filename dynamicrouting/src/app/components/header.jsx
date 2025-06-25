'use client'; // required because you're using a hook and event handler in app router

import React from 'react';
import { useRouter } from 'next/navigation'; // ✅ Correct import for App Router

const Headers = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/Recipes');
  };

  return (
    <header className="bg-red-500 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-black">My Recipe Book</h1>
      <button
        className="bg-black text-white px-4 py-2 rounded-md hover:opacity-80 transition"
        onClick={handleClick}
      >
        Click Here
      </button>
    </header>
  );
};

export default Headers;
