import React, { useState } from "react";


function Recipe({ recipeCard }) {
    const [flip, setFlip] = useState(false);

    // console.log( "all ingredients", recipeCard.ingredients)

    // if there are ingredients, display all names of ingredients
    // if there are no ingredients, no ingredients
    // console.log(recipeCard.ingredients.name)
    // console.log(recipeCard)
    // console.log(recipeCard.ingredients)

    const mapRecipeCard = recipeCard.ingredients.map((ingredient) => {
        // console.log(ingredient.name)
        return (ingredient.name) 
    })

    console.log(mapRecipeCard)
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