import React, { useState } from "react";


function Recipe({ recipeCard }) {
    const [flip, setFlip] = useState(false);

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
            Ingredients: {recipeCard.ingredients[0].name}
            Instructions: {recipeCard.instructions} </div>
        </div>
    )
}




export default Recipe;