import React, { useState } from "react";


function recipeCard({ recipe }) {
    const [flip, setFlip] = useState(false)


    return (
        <div 
        className = {`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        >
            <div className="front"> {recipe.prompt} </div>
            <div className="back"> {recipe.answer} </div>
        </div>

    )
}




export default recipeCard;