import React from "react";
import Recipe from "./Recipe";
import { useNavigate } from "react-router-dom";
import "./Recipe.css"

function RecipeList({ recipes, onDeleteRecipe, onUpdateRecipe}) {

    const navigate = useNavigate()

    function handleDeleteClick(recipeCard) {
        // debugger
        fetch(`http://localhost:9292/recipes/${recipeCard.id}`, {
            method: "DELETE",
        });
    
        onDeleteRecipe(recipeCard.id)
    }

    // Use recipeCard.id to delete the correct
    const mappedRecipes = recipes.map(recipeCard => {
        return (
        <div className="individual-card" key={recipeCard.id}>
        <Recipe 
        key={recipeCard.id}
        recipeCard={recipeCard} 
        onUpdateRecipe={onUpdateRecipe}
        />
        <button className="remove" onClick={() => handleDeleteClick(recipeCard)}>DELETE</button>
        <button className="edit" onClick={() => navigate("/editrecipe")}>EDIT</button>
        </div>
        )
    })


    return (
        <div className="card-grid">
            {mappedRecipes}
        </div>
    )
}

export default RecipeList