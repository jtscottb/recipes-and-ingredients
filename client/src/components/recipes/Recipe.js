import React, { useState } from "react";


function Recipe({ recipeCard }) {
    const [flip, setFlip] = useState(false)

    return (
        <div 
        className = {`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        >
            <div className="front"> 
                <img src={recipeCard.picture}></img>
                {recipeCard.name}
            </div>
            <div className="back"> {recipeCard.ingredients} </div>
        </div>

    )
}




export default Recipe;