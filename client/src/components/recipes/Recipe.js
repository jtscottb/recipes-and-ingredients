import React, { useState } from "react";


function Recipe({ recipeCard }) {
    const [flip, setFlip] = useState(false)


    return (
        <div 
        className = {`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        >
            <div className="front"> {recipeCard.name}</div>
            <div className="back"> {recipeCard.picture} </div>
        </div>

    )
}




export default Recipe;