import React, { useState } from "react";
import EditRecipe from "./EditRecipe";


function Recipe({ recipeCard, onUpdateRecipe}) {
    const [flip, setFlip] = useState(false);

    const mapRecipeCard = recipeCard.ingredients.map((ingredient) => {
        return (ingredient.name) 
    })

    return (
        <div 
        className = {`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        >
            <div className="front"> 
                <div className="container">
                    <img src={recipeCard.picture} alt=""></img>
                </div> {recipeCard.name} </div>
            <div className="back"> 
            <h2>Ingredients: {mapRecipeCard} </h2>
            <h3>Instructions: {recipeCard.instructions} </h3>
            </div>
        </div>
    )
}



export default Recipe;