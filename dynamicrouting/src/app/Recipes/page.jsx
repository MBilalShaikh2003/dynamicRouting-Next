import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipe";


export default function RecipePages(){
    return(
        <div>
            <h1>All Recipes here </h1>
            <div>
                {
                    recipes.map(recipe)=>(

                        <RecipeCard key={recipe.id} recipe={recipe} />


                    )
            }
            </div>


        </div>
    )


}

