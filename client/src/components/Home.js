import React, { useState, useEffect } from "react";
import RecipeList from "./recipes/RecipeList";
import "./Home.css"

function Home() {
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
    

    return (
        <div className="description">
            <p>Store all your favorite recipes here!</p>
            <div className="recipe-container">
                <RecipeList 
                recipes={recipes} 
                onDeleteRecipe={handleDeleteRecipe}
                onUpdateRecipe={handleUpdateRecipe}
                />
            </div>
        </div>
    )
}

export default Home