'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function RecipeCard({ recipe }) {
  return (
    <div className="border p-4 rounded shadow-md w-80">
      <Image src={recipe.image} alt={recipe.title} width={320} height={200} className="rounded" />
      <h2 className="text-xl font-bold mt-2">{recipe.title}</h2>
      <p>{recipe.description}</p>
      <Link href={`/Recipes/${recipe.slug}`} className="text-blue-500 underline mt-2 inline-block">
        View Recipe
      </Link>
    </div>
  );
}
