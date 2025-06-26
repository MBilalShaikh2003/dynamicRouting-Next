'use client'; // 👈 Required to use useParams in App Router

import { useParams } from 'next/navigation';
import recipes from '@/app/data/recipe';
import Image from 'next/image';
import { useEffect } from 'react';

export default function RecipeDetail() {
  const params = useParams(); // 👈 gets params from the URL
  console.log(params)
  const recipe = recipes.find((r) => r.slug === params.slug);

  useEffect(() => {
    console.log('URL params:', params); // 👈 logs in browser dev tools
  }, [params]);

  if (!recipe) {
    return (
      <div className="p-8 text-red-500 text-xl">
        Recipe not found! ❌
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={400}
        height={200}
        className="rounded mb-4"
      />
      <p className="text-lg">{recipe.description}</p>
    </div>
  );
}
