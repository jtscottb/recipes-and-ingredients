import React, { useState } from "react";


function Card({ recipeCard }) {
    const [flip, setFlip] = useState(false)


    return (
        <div 
        className = {`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        >
            <div className="front"> {recipeCard.name}</div>
            <button className="remove" onClick={handleDeleteClick}>DELETE</button>
            <div className="back"> {recipeCard.picture} </div>
        </div>

    )
}




export default Card;