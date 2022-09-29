import React from "react";
import { useNavigate } from "react-router-dom"
import RecipeList from "./recipes/RecipeList";
import "./Home.css"

function Home( { recipes, onDeleteRecipe, onUpdateRecipe, onAddRecipe } ) {
    const navigate = useNavigate()


    return (
        <div className="description">
            <p>Store all your favorite recipes here!</p>
            <button type={"submit"} onClick={() => navigate("/addrecipe")}>Add Recipe</button>
            <div className="recipe-container">
                <RecipeList 
                recipes={recipes} 
                onDeleteRecipe={onDeleteRecipe}
                onUpdateRecipe={onUpdateRecipe}
                onAddRecipe={onAddRecipe}
                />
            </div>
        </div>
    )
}

export default Home