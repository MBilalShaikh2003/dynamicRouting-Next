'use client'; // required because you're using a hook and event handler in app router

import React from 'react';
import { useRouter } from 'next/navigation'; // ✅ Correct import for App Router
import { useState } from 'react';
import recipes from '../data/recipe';
const Headers = () => {
  const router = useRouter();
  const [item,setItem]=useState('')
  const handleClick = () => {
    router.push('/Recipes');
  };
const handleSearch=()=>{
  const match=recipes.find((r)=>r.title.toLowerCase()=== item.toLowerCase())

if(match){
  router.push(`/Recipes/${match.slug}`)
}
else{
  alert("not found")
}
}
  return (
    <header className="bg-red-500 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-black">My Recipe Book</h1>
      <div className=' flex gap-2'>
        <input type="text" value={item} placeholder='search recipe here ...' onChange={(e)=>setItem(e.target.value)} className='' />
        <button onClick={handleSearch}>Search </button>
      </div>
      
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
