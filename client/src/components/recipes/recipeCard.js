import React, { useState } from "react";


function RecipeCard({ recipe }) {
    const [flip, setFlip] = useState(false)

    function handleDeleteClick() {
        fetch(`http://localhost:9292/recipes/${id}`, {
            method: "DELETE",
        });
    }


    return (
        <div 
        className = {`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        >
            <div className="front"> {recipe.prompt} </div>
            <div className="back"> {recipe.answer} </div>
            <button onClick={handleDeleteClick}>DELETE</button>
        </div>

    )
}




export default RecipeCard;