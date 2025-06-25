import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipe";

export default function RecipePages() {
  return (
    <div>
      <h1 className=" text-2xl font-bold text-center">All Recipes here</h1>
      <div className=" flex  flex-wrap gap-1">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe}  />
        ))}
      </div>
    </div>
  );
}
