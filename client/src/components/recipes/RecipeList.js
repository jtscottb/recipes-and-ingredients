import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./Recipe.css"

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:9292/recipes")
        .then((response) => response.json())
        .then((recipes) => setRecipes(recipes))
    }, []);

    function handleDeleteRecipe(id) {
        const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
        setRecipes(updatedRecipes)
    }

    function handleUpdateRecipe(updatedRecipeObj) {
        const updatedRecipes = recipes.map((recipe) => {
            if (recipe.id === updatedRecipeObj.id) {
                return updatedRecipeObj
            } else {
                return recipe
            }
        });
        setRecipes(updatedRecipes)
    }

    const mappedRecipes = recipes.map(recipeCard => {
        return (
        <Recipe 
        recipeCard={recipeCard} 
        key={recipeCard.id}
        onRecipeDelete={handleDeleteRecipe}
        onUpdateRecipe={handleUpdateRecipe}
        />
        )
    })

    

    return (
        <div className="card-grid">
            {mappedRecipes}
        </div>
    )
}

export default RecipeList