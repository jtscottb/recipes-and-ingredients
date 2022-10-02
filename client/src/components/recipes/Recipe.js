import React, { useState } from "react";


function Recipe({ recipeCard }) {
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
            <p1>Ingredients: {mapRecipeCard} </p1>
            <p2>Instructions: {recipeCard.instructions} </p2>
            </div> 
        </div>
    )
}



export default Recipe;