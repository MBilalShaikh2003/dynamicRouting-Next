import recipes from '@/app/data/recipe';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default function RecipeDetail({ params }) {
  const recipe = recipes.find((r) => r.slug === params.slug);

  if (!recipe) return notFound();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={600}
        height={400}
        className="rounded mb-4"
      />
      <p className="text-lg">{recipe.description}</p>
    </div>
  );
}
