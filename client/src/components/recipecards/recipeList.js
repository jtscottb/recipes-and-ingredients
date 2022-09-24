import React, { useState, useEffect } from "react";
import recipeCard from "./recipeCard";


function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/home")
            .then((response) => response.json())
            .then((recipes) => setRecipes(recipes))
    }, [])


    return (
        <div className="card-grid">
            {recipes.map(recipe => {
                return <recipeCard recipe={recipe} key={recipe.id} />
            })}
        </div>
    );
}


export default RecipeList