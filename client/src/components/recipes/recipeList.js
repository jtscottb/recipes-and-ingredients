import React, { useState, useEffect } from "react";
import RecipeCard from "./recipeCard";


function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/recipes")
            .then((response) => response.json())
            .then((recipes) => setRecipes(recipes))
    }, [])

    

    return (
        <div className="card-grid">
            {recipes.map(recipe => {
                return <RecipeCard recipe={recipe} key={recipe.id} />
            })}
        </div>
    );
}


export default RecipeList