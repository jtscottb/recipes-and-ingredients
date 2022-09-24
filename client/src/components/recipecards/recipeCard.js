import React, { useState } from "react";


function recipeCard({ recipeCard }) {
    const [flip, setFlip] = useState(false)


    return (
        <div 
        className = {`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        >
            <div className="front"> {recipeCard.prompt} </div>
            <div className="back"> {recipeCard.answer} </div>
        </div>

    )
}




export default recipeCard;